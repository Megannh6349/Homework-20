import React from 'react';
import './App.css';
import NavbarComp from './navbar';
import ProjectsPage from './projectsPage'
import FooterComp from './footer';


class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div id="Home"><NavbarComp /></div>
                <ProjectsPage />
                <div><FooterComp /></div>
            </div>
        )
    }
}

export default Portfolio;