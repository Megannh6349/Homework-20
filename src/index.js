import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Skills from './Skills';
import Projects from './Projects';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const routing = (
  <BrowserRouter>
  {/* <Link to="/">Home</Link>
  <Link to="/skills">Skills</Link>
  <Link to="/projects">Projects</Link> */}
  <Switch>
      <Route exact path="/" component={App} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
  </Switch>
</BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
