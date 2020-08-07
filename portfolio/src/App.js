import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import { Row, Col } from 'react-materialize';


export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="sidebar"
          s={2}>
            <h3>Megan Henning</h3>
            <hr />
            <p><i className="material-icons">contact_mail</i><a href="mailto:megannh6349@gmail.com">megannh6349@gmail.com</a></p>
            <p><i className="material-icons">contact_phone</i>(732) 236-0920</p>



          </Col>
          <Col className="mainLanding"
          s={10}>mainLanding</Col>
        </Row>
      </div>
    )
  }
};
