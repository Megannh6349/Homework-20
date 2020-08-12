import React from 'react';
import { Progress, ListGroup } from 'bootstrap-4-react';

class SkillsPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Skills</h1>
                <p>These are the skills that I am most confident in</p>
                <h5>HTML</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar className="cyan lighten-2" min="0" max="100" now="95">95%</Progress.Bar>
                </Progress>
                <h5>CSS</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar className="cyan lighten-2" min="0" max="100" now="90">90%</Progress.Bar>
                </Progress>
                <h5>Github/Git</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar className="cyan lighten-2" min="0" max="100" now="90">90%</Progress.Bar>
                </Progress>
                <h5>JavaScript/JQuery</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar className="cyan lighten-2" min="0" max="100" now="85">85%</Progress.Bar>
                </Progress>
                <h5>Node/CLI</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar className="cyan lighten-2" min="0" max="100" now="75">75%</Progress.Bar>
                </Progress>
                <h4>And here is a list of everything I've learned about</h4>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">The Browser</ListGroup.Item>
                    <ListGroup.Item>HTML</ListGroup.Item>
                    <ListGroup.Item>CSS</ListGroup.Item>
                    <ListGroup.Item>JavaScript</ListGroup.Item>
                    <ListGroup.Item>jQuery</ListGroup.Item>
                    <ListGroup.Item>Bootstrap/Materialize</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">API Interaction</ListGroup.Item>
                    <ListGroup.Item>APIs</ListGroup.Item>
                    <ListGroup.Item>JSON</ListGroup.Item>
                    <ListGroup.Item>AJAX</ListGroup.Item>
                    <ListGroup.Item>Real Time Cloud Database</ListGroup.Item>
                    <ListGroup.Item>Firebase</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">Server Side</ListGroup.Item>
                    <ListGroup.Item>Templating Engines</ListGroup.Item>
                    <ListGroup.Item>Sessions</ListGroup.Item>
                    <ListGroup.Item>Writing tests</ListGroup.Item>
                    <ListGroup.Item>Node.js</ListGroup.Item>
                    <ListGroup.Item>Express.js</ListGroup.Item>
                    <ListGroup.Item>Creating APIs</ListGroup.Item>
                    <ListGroup.Item>MVC</ListGroup.Item>
                    <ListGroup.Item>User Authentication</ListGroup.Item>
                    <ListGroup.Item>ORM (Sequelize)</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">Databases</ListGroup.Item>
                    <ListGroup.Item>MySQL</ListGroup.Item>
                    <ListGroup.Item>MongoDB</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">DevTools</ListGroup.Item>
                    <ListGroup.Item>Git</ListGroup.Item>
                    <ListGroup.Item>GitHub</ListGroup.Item>
                    <ListGroup.Item>Heroku</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">Cutting Edge Development</ListGroup.Item>
                    <ListGroup.Item>React.js</ListGroup.Item>
                </ListGroup>
                <ListGroup style={{ marginBottom: '20px' }}>
                    <ListGroup.Item className="cyan lighten-2">CS Fundamentals</ListGroup.Item>
                    <ListGroup.Item>Algorithms</ListGroup.Item>
                    <ListGroup.Item>Data Structures</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default SkillsPage;