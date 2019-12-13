import React from 'react';
import './About.css';
import {FaArrowDown} from 'react-icons/fa'

function About() {
	return (
		<div className="About">
            <div className="ShortAbout">
                <p>I'm a software developer and designer who's in love with tech.</p>
                <div>
                    <FaArrowDown className="Arrow"/>
                </div>
            </div>
            <div>
                <div className="BigAbout">
                    <p>ABOUT</p>
                    <p>ME</p>
                </div>
                <div className="AboutParagraph">
                    <p>I am an enthusiastic computer science student at FIU. I enjoy learning new things every day and strive to work on projects that have a massive impact!</p>
                    <p>I have experience with web development, Java, and C, and am always open to adding new tools to my toolbox.</p>
                </div>
            </div>
		</div>
	);
}

export default About;