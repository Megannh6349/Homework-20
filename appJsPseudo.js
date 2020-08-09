import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import { Row, Col, Parallax } from 'react-materialize';


export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="sidebar"
            s={2}>
            <h3>Megan Henning</h3>
            <hr />
            <p><i className="material-icons">contact_mail</i><a target="_blank" href="mailto:megannh6349@gmail.com">megannh6349@gmail.com</a></p>
            <p><i className="material-icons">contact_phone</i>(732) 236-0920</p>
            <hr />
            <div class="collection">
              <a href="#Introduction" class="collection-item">Introduction</a>
              <a href="#About" class="collection-item">About</a>
              <a href="#Skills" class="collection-item">Skills</a>
              <a href="#Projects" class="collection-item">Projects</a>
            </div>
            <hr />
            <a target="_blank" href="https://github.com/Megannh6349" className="icons"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/megan-henning/" className="icons"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" /></a>
            <a target="_blank" href="https://www.codecademy.com/profiles/Megannh6349" className="icons"><img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/codecademy.svg" /></a>



            



          </Col>
          <Col className="mainLanding"
            s={10}>
            <div>
              <p>mainLanding</p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
};
