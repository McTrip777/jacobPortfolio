import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss';
import Nav from './Navbar/Nav'
import Contact from './contact/Contact';
import Projects from './projects/Projects'
// import image from './images/textClip.jpg'
import About from './about/About'
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Route path="/about" component={About} />
      <Route path="/" component={Home} /> */}
      <div className="title section1">
        <h2 className="name">Jacob McFaul</h2>
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

  