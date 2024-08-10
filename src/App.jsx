import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMeSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

export default App;
