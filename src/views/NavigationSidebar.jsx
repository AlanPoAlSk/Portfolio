

function NavigationSidebar ({ activeSection, onSectionClick }) {
    return (
        <nav className="sidebar">
            <ul>
                <li onClick={() => onSectionClick('about')} className={activeSection === 'about' ? 'active' : ''}>About Me</li>
                <li onClick={() => onSectionClick('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</li>
                <li onClick={() => onSectionClick('resume')} className={activeSection === 'resume' ? 'active' : ''}>Resume</li>
                <li onClick={() => onSectionClick('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</li>
            </ul>
    </nav>
    );
}

export default NavigationSidebar;