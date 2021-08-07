import React from 'react';
import './App.scss';
import Contact from './contact/Contact';
import Projects from './projects/Projects'
// import image from './images/textClip.jpg'
import About from './about/About'
function App() {
  return (
    <div className="App">
      <div className="title section1">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="about section2">
        <About />
      </div>
      <div className="projects section3">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;