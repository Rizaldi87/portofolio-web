import { useEffect, useRef, useState } from 'react'

interface SplashScreenProps {
  name?: string
  title?: string
  location?: string
  about?: string[]
  skills?: { label: string; color: string }[]
  onFinish?: () => void
}

const ASCII = [
    '██████╗ ██╗███████╗ █████╗ ██╗     ██████╗ ██╗',
    '██╔══██╗██║╚══███╔╝██╔══██╗██║     ██╔══██╗██║',
    '██████╔╝██║  ███╔╝ ███████║██║     ██║  ██║██║',
    '██╔══██╗██║ ███╔╝  ██╔══██║██║     ██║  ██║██║',
    '██║  ██║██║███████╗██║  ██║███████╗██████╔╝██║',
    '╚═╝  ╚═╝╚═╝╚══════╝╚═╝  ╚═╝╚══════╝╚═════╝ ╚═╝',
    '',
    '> SOFTWARE ENGINEER',
    '> JAVA • REACT • NEXTJS • SQL',
]

type Line =
  | { type: 'command'; prompt: string; cmd: string }
  | { type: 'output'; text: string; color?: string }
  | { type: 'blank' }
  | { type: 'ascii'; text: string }

export default function SplashScreen({
    name = 'RIZALDI',
    title = 'Software Engineer',
    location = 'Indonesia',

    about = [
    'Developing and maintaining a Hospital Management System.',
    'Delivered 10+ production features in a healthcare environment.',
    'Experienced in UI design, database design, and application development.',
    'Passionate about building reliable and maintainable software solutions.',
    ],

    skills = [
    { label: 'Java', color: '#f89820' },
    { label: 'JavaScript', color: '#f7df1e' },
    { label: 'PHP', color: '#777bb4' },
    { label: 'SQL', color: '#4f8ef7' },
    { label: 'React', color: '#61dafb' },
    { label: 'Next.js', color: '#ffffff' },
    { label: 'NestJS', color: '#e0234e' },
    { label: 'Git', color: '#F05032' },
    { label: 'C#', color: '#F05032' },
    { label: 'Laravel', color: '#FF2D20' },
    { label: 'Unity', color: '#FFFFFF' },
    { label: 'Godot', color: '#478CBF' },
    { label: 'Blender', color: '#F5792A' },
    ],
  onFinish,
}: SplashScreenProps) {
  const [lines, setLines] = useState<Line[]>([])
  const [typingPrompt, setTypingPrompt] = useState('')
  const [typingText, setTypingText] = useState('')
  const [barProgress, setBarProgress] = useState(0)
  const [showBar, setShowBar] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [unmounted, setUnmounted] = useState(false)

  const hasRun = useRef(false)  // guard StrictMode double-invoke
  const bottomRef = useRef<HTMLDivElement>(null)
  const isMobile = window.innerWidth < 640

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines, typingText, barProgress])

  useEffect(() => {
    // StrictMode guard — hanya boleh jalan sekali
    if (hasRun.current) return
    hasRun.current = true

    const PROMPT = isMobile ? 'C:\\dev>' : 'C:\\Users\\rizaldi\\dev>'

    const pause = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    const typeCmd = (cmd: string, speed = 48) =>
      new Promise<void>((res) => {
        setTypingPrompt(PROMPT)
        setTypingText('')
        let i = 0
        const iv = setInterval(() => {
          if (i >= cmd.length) { clearInterval(iv); res(); return }
          setTypingText((p) => p + cmd[i++])
        }, speed)
      })

    const commitCmd = (cmd: string) => {
      setTypingPrompt('')
      setTypingText('')
      setLines((p) => [...p, { type: 'command', prompt: PROMPT, cmd }])
    }

    const addLine = (line: Line, delay = 0) =>
      new Promise<void>((r) => setTimeout(() => {
        setLines((p) => [...p, line])
        r()
      }, delay))

    const runBar = async () => {
      setShowBar(true)
      setBarProgress(0)
      for (let i = 0; i <= 20; i++) {
        setBarProgress(i / 20)
        await pause(55)
      }
      setShowBar(false)
    }

    async function run() {
      await pause(500)
      await addLine({ type: 'output', text: 'Microsoft Windows [Version 10.0.19045.3803]', color: '#c0c0c0' }, 120)
      await addLine({ type: 'output', text: '(c) Microsoft Corporation. All rights reserved.', color: '#c0c0c0' }, 120)
      await addLine({ type: 'blank' }, 40)
      // whoami
      await typeCmd('whoami')
      await pause(180)
      commitCmd('whoami')
      await addLine({ type: 'output', text: `${name.toLowerCase().replace(' ', '_')} — ${title}`, color: '#2ecc71' }, 40)
      await addLine({ type: 'blank' }, 40)
      await pause(200)

      // build portfolio
      await typeCmd('build portfolio')
      await pause(200)
      commitCmd('build portfolio')
      await addLine({ type: 'blank' }, 40)
      await runBar()
      await addLine({ type: 'output', text: '✓ Build complete', color: '#2ecc71' }, 60)
      await addLine({ type: 'output', text: '✓ Assets optimized', color: '#2ecc71' }, 60)
      await addLine({ type: 'output', text: '✓ Portfolio ready', color: '#2ecc71' }, 60)
      await addLine({ type: 'blank' }, 80)
      await pause(220)

      // ASCII art
      for (const row of ASCII) {
        await addLine({ type: 'ascii', text: row }, 55)
      }
      await addLine({ type: 'blank' }, 80)
      await addLine({
        type: 'output',
        text: `${title.toUpperCase()}  —  ${location.toUpperCase()}`,
        color: 'rgba(255,255,255,0.2)',
      }, 80)
      await addLine({ type: 'blank' }, 80)

      // exit
      setTypingPrompt(PROMPT)
      await typeCmd('exit')
      await pause(180)
      commitCmd('exit')
      await pause(400)

      // Prompt akhir + cursor blink sebentar lalu fade out
      setTypingPrompt(PROMPT)
      await pause(1200)
      setCursorVisible(false)
      await pause(100)

      // Fade out lalu unmount
      setFadeOut(true)
      await pause(300)
      setUnmounted(true)
      onFinish?.()
    }

    run()
  }, [])

  if (unmounted) return null

  const barFilled = Math.round(barProgress * 20)
  const barEmpty = 20 - barFilled
  const barPct = Math.round(barProgress * 100)

  const renderLine = (line: Line, idx: number) => {
    if (line.type === 'blank') return <div key={idx} style={{ height: isMobile ? '0.2rem' : '0.4rem' }} />

    if (line.type === 'command') return (
      <div key={idx} style={{ fontSize: isMobile ? 13 : 16, lineHeight: 1.8, fontFamily: '"Consolas", "Lucida Console", monospace', whiteSpace: 'pre' }}>
        <span style={{ color: '#c0c0c0' }}>{line.prompt}</span>
        <span style={{ color: '#e2e2f0' }}> {line.cmd}</span>
      </div>
    )

    if (line.type === 'output') {
      const isSkillLine = skills.some((s) => line.text.includes(s.label))
      if (isSkillLine) {
        return (
          <div key={idx} style={{ fontSize: isMobile ? 13 : 16, lineHeight: 1.8, fontFamily: '"Consolas", "Lucida Console", monospace' }}>
            {line.text.split('  ').map((token, i) => {
              const skill = skills.find((s) => s.label === token)
              return <span key={i} style={{ color: skill?.color ?? '#e2e2f0', marginRight: '0.6rem' }}>{token}</span>
            })}
          </div>
        )
      }
      return (
        <div key={idx} style={{ fontSize: isMobile ? 13 : 16, lineHeight: 1.8, fontFamily: '"Consolas", "Lucida Console", monospace', color: line.color ?? '#e2e2f0', whiteSpace: 'pre' }}>
          {line.text}
        </div>
      )
    }

    if (line.type === 'ascii') return (
      <div key={idx} style={{ fontSize: isMobile ? 9 : 14, lineHeight: 1.4, letterSpacing: '0.05em', color: '#569cd6', fontFamily: '"Consolas", "Lucida Console", monospace', whiteSpace: 'pre' }}>
        {line.text}
      </div>
    )

    return null
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#000',
      display: 'flex', flexDirection: 'column',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      {/* Full screen terminal */}
      <div style={{
        flex: 1, padding: isMobile ? '8px 10px' : '12px 16px',
        overflowY: 'auto', fontFamily: '"Consolas", "Lucida Console", monospace',
      }}>
        {lines.map((line, i) => renderLine(line, i))}

        {showBar && (
          <div style={{ fontSize: isMobile ? 13 : 16, fontFamily: '"Consolas", "Lucida Console", monospace', color: '#569cd6', lineHeight: 1.8 }}>
            {`Copying...  [${'█'.repeat(barFilled)}${'░'.repeat(barEmpty)}]  ${barPct}%`}
          </div>
        )}

        {typingPrompt && (
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 2, fontFamily: '"Consolas", "Lucida Console", monospace', fontSize: isMobile ? 13 : 16 }}>
            <span style={{ color: '#c0c0c0' }}>{typingPrompt}</span>
            <span style={{ color: '#e2e2f0' }}>&nbsp;{typingText}</span>
            {cursorVisible && (
              <span style={{
                display: 'inline-block', width: isMobile ? 7 : 10, height: isMobile ? 14 : 18,
                background: '#c0c0c0', marginLeft: 2, verticalAlign: 'middle',
                animation: 'blink 1s step-end infinite',
              }} />
            )}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  )
}