import React from 'react';
import './App.scss';
import Contact from './contact/Contact';
// import image from './images/textClip.jpg'
import About from './about/About'
function App() {
  return (
    <div className="App">
      <div className="title section1">
        <h3>Jacob McFaul's</h3>
        <h2>PORTFOLIO</h2>
      </div>
      <div className="section2">
        <About />
        {/* <Projects /> */}
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;