// import './App.css'

import { useState } from "react";
import AboutMeSection from "./views/AboutMe";
import NavigationSidebar from "./views/NavigationSidebar";
import ProjectsSection from "./views/ProjectsSection";
import ResumeSection from "./views/ResumeSection";
import ContactSection from "./views/ContactSection";
import SkillsSection from "./views/Skills";

function App() {
  
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(prevSection => prevSection === section ? '' : section);
  };

  return (
    <>
    <div className="portfolio-page">
        <div className="content-wrapper">
          <NavigationSidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
          <div className={`${activeSection ? 'content' : ''}`}>
            {activeSection === 'about' && <AboutMeSection />}
            {activeSection === 'projects' && <ProjectsSection />}
            {activeSection === 'skills' && <SkillsSection />}
            {activeSection === 'resume' && <ResumeSection />}
            {activeSection === 'contact' && <ContactSection />}
          </div>
        </div>
    </div>
    </>
  );
}

export default App
