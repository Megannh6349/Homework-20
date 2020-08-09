import React, { Component } from 'react';
import './App.css';
import { Navbar, Icon, NavItem, Footer } from 'react-materialize';
import meganPro from './components/croppedProPhoto.jpg';
class App extends Component {
  render() {
    return (
      <div>

        <Navbar
          alignLinks="right"
          brand={<a className="brand-logo" href="#" style={{ marginLeft: '2%' }}>Megan Henning</a>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem href="" alt="Link to Home" style={{ marginTop: '25%', marginBottom: '25%' }}>
            Home
  </NavItem>
          <NavItem href="" alt="Link to About" style={{ marginTop: '25%', marginBottom: '25%' }}>
            About
  </NavItem>
          <NavItem href="" alt="Link to Skills" style={{ marginTop: '25%', marginBottom: '25%' }}>
            Skills
  </NavItem>
          <NavItem href="" alt="Link to Projects" style={{ marginTop: '20%', marginBottom: '30%' }}>
            Projects
  </NavItem>
        </Navbar>

        <h1>Hello World</h1>


        <Footer
          className="example"
          copyrights="Copyright Megan Henning 2020"
          links={<ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Megannh6349" className="icons"><img height="32" width="32" alt="github logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-henning/" className="icons"><img height="32" width="32" alt="linkedin logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" /></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/profiles/Megannh6349" className="icons"><img height="32" width="32" alt="codecademy logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/codecademy.svg" /></a></li>
                </ul>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
          <div className="row">
            <div className="col"><img src={meganPro} height='15%' width='15%' alt="Headshot of Megan" />
            </div>
            <div className="col">
              <h5 className="white-text">
                Megan Henning
              </h5>
              <p className="grey-text text-lighten-4">
                <p><i className="material-icons">contact_mail</i><a target="_blank" rel="noopener noreferrer" href="mailto:megannh6349@gmail.com">megannh6349@gmail.com</a></p>
                <p><i className="material-icons">contact_phone</i>(732) 236-0920</p>
              </p>
            </div>
          </div>
        </Footer>
      </div>
    )
  }
}


export default App;