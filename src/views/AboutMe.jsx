import { useEffect } from "react";

import picture from '../assets/picture.png';

function AboutMeSection() {
    useEffect(() => {
        
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
                <div className="image-container">
                    <img src={picture} alt="picture" className="center-image"/>
                    <div>
                        <h2 className="about-me-title">Alan Skrzecz</h2>
                        <h4 className="about-me-subtitle">- Software Developer -</h4>
                    </div>
                </div>
                {/* <h2 style={{color:"whitesmoke"}}>About Me</h2> */}
                <div id="matrix-text" className="matrix-text">
                I am a full stack developer, graduated from Coding Dojo. 
                Former Office Manager and Tax Professional, skilled in fiscal operations management, team leadership, and customer service. 
                Thrived during Covid, achieving remarkable growth. 
                Proficient in Italian, Spanish, and English. 
                Passionate about tech and eager to contribute to collaborative projects. 
                Experienced in remote work and rapid application development. 
                Dedicated, adaptable, and curious. 
                Let's connect for potential collaborations in tech!
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;