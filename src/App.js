import React from 'react';
import './App.css';
import NavbarComp from './components/navbar';
import Parallax1 from './components/parallax1';
import FooterComp from './components/footer';
import CarouselComp from './components/carousel';
import Parallax2 from './components/parallax2';

class App extends React.Component {
  render() {
    return (
      <div>
        <div id="Home"><NavbarComp /></div>
        <div><Parallax1 /></div>
        <div><CarouselComp /></div>
        <div><Parallax2 /></div>
        <div><FooterComp /></div>
      </div>
    )
  }
}

export default App;