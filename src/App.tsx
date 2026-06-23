import "./App.css";
import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import ParticleField from "./components/Particles";
import AboutMeSection from "./components/Sections/AboutMeSection";
import ContactSection from "./components/Sections/ContactSection";
import ExperienceSection from "./components/Sections/ExperienceSection";
import HeroSection from "./components/Sections/HeroSection";
import ProjectSections from "./components/Sections/ProjectSections";

function App() {
  return (
    <>
      <ParticleField />
      <Cursor />
      <div className="relative z-10 w-full min-h-screen">
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
      </div>
    </>
  );
}

export default App;
