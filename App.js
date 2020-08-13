import React from 'react';
import './App.css';
import NavbarComp from './navbar'
import Parallax1 from './parallax1';
import FooterComp from './footer';
import CarouselComp from './carousel';
import Parallax2 from './parallax2';

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