import React from 'react';
import './App.scss';
import Contact from './contact/Contact';
// import image from './images/textClip.jpg'

function App() {
  return (
    <div className="App">
      <div className="title section1">
        <h3>Jacob McFaul's</h3>
        <h2>PORTFOLIO</h2>
      </div>
      <div className="section2">

        {/* <img src={image} /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;