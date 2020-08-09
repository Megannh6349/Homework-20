import React from 'react';
import { Progress } from 'bootstrap-4-react';

class Skills extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Skills</h1>
                <p>These are the skills that I am most confident in</p>
                <h5>HTML</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar min="0" max="100" now="95" />
                </Progress>
                <h5>CSS</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar min="0" max="100" now="90" />
                </Progress>
                <h5>Github/Git</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar min="0" max="100" now="90" />
                </Progress>
                <h5>JavaScript/JQuery</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar min="0" max="100" now="85" />
                </Progress>
                <h5>Node/CLI</h5>
                <Progress mb="2" style={{ height: '20px' }}>
                    <Progress.Bar min="0" max="100" now="75" />
                </Progress>
                <h4>And here is a list of everything I can do</h4>
            </div>
        )
    }
}

export default Skills;