import React from 'react';
import { Navbar, Icon, NavItem } from 'react-materialize';

class NavbarComp extends React.Component {
    render() {
        return (
            <Navbar className="cyan lighten-2"
                alignLinks="right"
                brand={<a href="/" alt="Link to " style={{ marginLeft: '2%' }}>Megan Henning</a>}
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
                <NavItem href="/" alt="Link to Home" style={{ marginTop: '25%', marginBottom: '25%' }}>
                    Home
                </NavItem>
                <NavItem href="/skills" alt="Link to Skills" style={{ marginTop: '25%', marginBottom: '25%' }}>
                    Skills
                </NavItem>
                <NavItem href="/projects" alt="Link to Projects" style={{ marginTop: '20%', marginBottom: '30%' }}>
                    Projects
                </NavItem>
            </Navbar>
        )
    }
}

export default NavbarComp;