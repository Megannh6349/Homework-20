import React from 'react';
import './App.css';
import NavbarComp from './components/navbar';
import ProjectsPage from './components/projectsPage'
import FooterComp from './components/footer';


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