import React from 'react';
import './ProjectList.css';
import Project from './Project/Project.js'

function ProjectList() {
	return (
		<div className="ProjectList">
            <div>
                <div className="BigProjects">
                    <p>PROJ-<br></br>ECTS</p>
                </div>
                <div className="AllProjects">
                    <Project />
                </div>
            </div>
		</div>
	);
}

export default ProjectList;