import React from 'react';
import Banner from './Banner/Banner.js'
import About from './About/About.js'
import ProjectList from './ProjectList/ProjectList.js'
import './App.css';

function App() {
	return (
		<div className="App">
			<Banner />
			<About />
			<ProjectList />
		</div>
	);
}

export default App;