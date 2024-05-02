import { useEffect, useState } from "react";
import Html from '../assets/logos/html.svg';
import Css from '../assets/logos/css.svg';
import Bootstrap from '../assets/logos/bootstrap.svg';
import Tailwind from '../assets/logos/Tailwind_CSS_Logo.png';
import Javascript from '../assets/logos/javascript.svg';
import React from '../assets/logos/react.svg';
import Python from '../assets/logos/python.svg';
import Django from '../assets/logos/django.svg';
import Flask from '../assets/logos/flask.svg';
import Java from '../assets/logos/java.svg';
import Spring from '../assets/logos/spring.svg';
import Json from '../assets/logos/json.svg';
import NodeJs from '../assets/logos/nodejs.svg';
import Npm from '../assets/logos/npm.svg';
import Git from '../assets/logos/git.svg';
import MongoDB from '../assets/logos/mongodb.svg';
import MySQL from '../assets/logos/mysql.svg';
import AWS from '../assets/logos/amazon.svg';
import Github from '../assets/logos/github.svg';
import Bitbucket from '../assets/logos/bitbucket.svg';


function SkillsSection() {
    const logos = [Html, Css, Bootstrap, Tailwind, Javascript, React, Python, Django, Flask, Java, Spring, Json, NodeJs, Npm, Git, MongoDB, MySQL, AWS, Github, Bitbucket]; // Add other logo paths as needed
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < logos.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    }, 800); 
    
        return () => clearInterval(interval);
        }, [currentIndex, logos.length]);
    return (
        <div className="skills-section">
                <h2 style={{color:'whitesmoke'}}>Skills</h2>
                <div className="logos-container">
                    <div className="logos">
                    {logos.map((logo, index) => (
                        <div key={index} className={index <= currentIndex ? 'logo-container fade-in' : 'logo-container hidden'}>
                            <img src={logo} alt={`logo-${index}`} />
                        </div>
                    ))}
                </div>
                </div>
        </div>
    );
}

export default SkillsSection;