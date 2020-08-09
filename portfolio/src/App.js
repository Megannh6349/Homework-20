import React from 'react';
import './App.css';
import NavbarComp from './components/navbar.js';
import Parallax1 from './components/parallax1.js';
import FooterComp from './components/footer.js';
import CarouselComp from './components/carousel.js';
import Parallax2 from './components/parallax2.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="Home"><NavbarComp /></div>
        <div><Parallax1 /></div>
        <div id="About"><CarouselComp /></div>
        <div><Parallax2 /></div>
        <div><FooterComp /></div>
      </div>
    )
  }
}

export default App;