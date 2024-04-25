import { useEffect } from "react";

function AboutMeSection() {
    useEffect(() => {
        // Add animation logic here
        const textContainer = document.getElementById("matrix-text");
        const chars = textContainer.innerText.split("");
    
        textContainer.innerText = "";
        chars.forEach((char, i) => {
            setTimeout(() => {
            const span = document.createElement("span");
            span.innerText = char;
            textContainer.appendChild(span);
          }, i * 50); 
        });
    }, []);
    return (
        <div className="about-me-section">
            <div className="matrix-container">
                <h2>About Me</h2>
            <div id="matrix-text" className="matrix-text">
            I am a full stack developer, graduating from Coding Dojo. Skilled in HTML, CSS, JavaScript, React, Bootstrap/Tailwind, Python, Java, Django, Flask, Express, Spring Boot, MongoDB, SQL, SQLite, AWS, Postman, Git, and VSCode.
            Previously an Office Manager and Tax Professional, excelling in fiscal operations management, team leadership, and customer service. Thrived during Covid, achieving remarkable growth and increased earnings. Proficient in Italian, Spanish, and English.
            Passionate about tech, eager to contribute to projects and grow within a collaborative team. Experienced in remote work and rapid application development. Dedicated, adaptable, and curious. Let's connect for potential collaborations in tech!
            </div>
            </div>
        </div>
    );
}

export default AboutMeSection;