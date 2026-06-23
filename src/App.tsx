import { lazy, Suspense, useState } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import AboutMeSection from "./components/Sections/AboutMeSection";
import ContactSection from "./components/Sections/ContactSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectSections from "./components/Sections/ProjectSections";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Sections/Footer";

const ParticleScene = lazy(() => import("./components/Particles"));

function App() {
  const [splashDone, setSplashDone] = useState(false);
  return (
    <>
      {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
      <Suspense fallback={null}>
        <ParticleScene />
      </Suspense>
      <Cursor />
      <div className={`relative z-10 w-full min-h-screen transition-opacity duration-700 ${splashDone ? "opacity-100" : "opacity-0"}`}>
        <NavBar />

        {/* hero section */}
        <HeroSection />

        {/* about me section */}
        <AboutMeSection />

        {/* projects section */}
        <ProjectSections />

        {/* experiences section */}
        <ExperienceSection />

        {/* Contact section */}
        <ContactSection />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
