import React from 'react';
import './App.css';
import NavbarComp from './components/navbar.js';

import FooterComp from './components/footer.js';


class Skills extends React.Component {
    render() {
        return (
            <div>
                <div id="Home"><NavbarComp /></div>

                <div><FooterComp /></div>
            </div>
        )
    }
}

export default Skills;