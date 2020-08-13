import React from 'react';
import './App.css';
import NavbarComp from './navbar.js';
import SkillsPage from './skillsPage.js';
import FooterComp from './footer.js';



class Skills extends React.Component {
    render() {
        return (
            <div>
                <div id="Home"><NavbarComp /></div>
                <SkillsPage />
                <div><FooterComp /></div>
            </div>
        )
    }
}

export default Skills;