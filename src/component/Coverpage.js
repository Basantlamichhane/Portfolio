import React from 'react';
import './coverpage.css';  

const CoverPage = () => {
    return (
        <div className="cover-page">
            <h1>Basant Lamichhane</h1>
            <h2>Graphic Designer & Front-End Developer</h2>
            <div className="contact-info">
                <p>Email: basantlamichhane13@gmail.com</p>
                <p>Phone: 9843062030</p>
                <div className='Linkedin'><p>LinkedIn: <a href="https://www.linkedin.com/in/basant-lamichhane-818160318/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/basant-lamichhane-818160318/</a></p></div>
                <div className='Website'><p>Website: <a href="https://www.facebook.com/basant.lamichhane.965" target="_blank" rel="noopener noreferrer">Facebook</a></p></div>
            </div>
        </div>
    );
};

export default CoverPage;