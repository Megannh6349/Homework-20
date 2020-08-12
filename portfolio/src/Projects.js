import React from 'react';
import './App.css';
import NavbarComp from './components/navbar.js';

import FooterComp from './components/footer.js';


class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div id="Home"><NavbarComp /></div>
                <h1>Projects</h1>
                <div><FooterComp /></div>
            </div>
        )
    }
}

export default Portfolio;