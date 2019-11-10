import React from 'react';
import './About.css';
import Button from "./Button.js"

function About() {
	return (
		<div className="About">
            <p>I'm a passionate software developer and designer who's in love with tech.</p>
            <p>I enjoy learning new things every day and strive for only the best quality.</p>
            <div className="NeedMoreInfo">
                <p>Want more information?</p>
                <div className="center">
                    <Button text="Y"></Button>
                    <Button text="N"></Button>                    
                </div>
            </div>
		</div>
	);
}

export default About;