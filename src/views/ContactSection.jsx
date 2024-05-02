import React, { useEffect } from 'react';

function ContactSection() {
    useEffect(() => {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.classList.add('active');
        }
    }, []);

    return (
        <div className="contact-section">
            <div className="contacts">
                <h2 style={{color: 'whitesmoke'}}>Contact</h2>
                <div className="text1">
                    <p>Based in Washington, D.C., United States</p>
                </div>
                <div className="text1">
                    <p>Email: alsk91@gmail.com</p>
                </div>
                <div className="text1">
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/alan-skrzecz/">alan-skrzecz</a></p>
                </div>
                <div className="text1">
                    <p>GitHub: <a href="https://github.com/AlanPoAlSk">PoAlSk</a></p>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;