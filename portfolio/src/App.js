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
          s={1}>sidebar</Col>
          <Col className="mainLanding"
          s={1}>mainLanding</Col>
        </Row>
      </div>
    )
  }
};
