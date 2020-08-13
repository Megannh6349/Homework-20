import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import COVID19App from './covid19ss.PNG';
import BurgerPic from './burgerpic.PNG';
import Blackjack from './blackjack.PNG';
import NoteTaker from './notetaker.PNG';

class ProjectsPage extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <h1>Projects</h1>
                <p>These are some of the projects I've worked on</p>
                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={COVID19App} reveal waves="light" />}
                            reveal={<div>
                                <p>This was a team project in which I contributed to the HTML, CSS, and research. Other
                                collaborators include:</p>
                                <br />
                                <ul>
                                    <li><a href="https://github.com/reinerbonsol" target="_blank" rel="noopener noreferrer">Reiner Bonsol</a></li>
                                    <li><a href="https://github.com/adambrosio" target="_blank" rel="noopener noreferrer">Andrew D'Ambrosio</a></li>
                                </ul>
                            </div>
                            }
                            revealIcon={<Icon>more_vert</Icon>}
                            title="COVID-19 Info App"
                        >
                            <p>
                                <a href="https://github.com/Megannh6349/COVID-19-app" target="_blank" rel="noopener noreferrer">Github Repository</a>
                            </p>
                            <p>
                                <a href="https://megannh6349.github.io/COVID-19-app/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                            </p>
                        </Card>
                    </Col>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={BurgerPic} reveal waves="light" />}
                            reveal={<div>
                                <p>This is a full stack application that I've worked very hard on. It's not quite done yet, but
                            here's what it can do so far!</p>
                            </div>
                            }
                            revealIcon={<Icon>more_vert</Icon>}
                            title="COVID-19 Info App"
                        >
                            <p>
                                <a href="https://github.com/Megannh6349/burger" target="_blank" rel="noopener noreferrer">Github Repository</a>
                            </p>
                            <p>
                                <a href="https://mh-hw13.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                            </p>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col
                        m={6}
                        s={12}
                    >
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image={Blackjack} reveal waves="light" />}
                            reveal={<div>
                                <p>This was a team project in which I contributed to the HTML, CSS, and research. Other
                            collaborators include:</p>
                                <br />
                                    <ul>
                                        <li><a href="https://github.com/reinerbonsol" target="_blank" rel="noopener noreferrer">Reiner Bonsol</a></li>
                                        <li><a href="https://github.com/adambrosio" target="_blank" rel="noopener noreferrer">Andrew D'Ambrosio</a></li>
                                        <li><a href="https://github.com/Mattfava" target="_blank" rel="noopener noreferrer">Matt Fava</a></li>
                                    </ul>
                            </div>
                            }
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Blackjack App"
                        >
                            <p>
                                    <a href="https://github.com/Megannh6349/COVID-19-app" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                </p>
                                <p>
                                    <a href="https://megannh6349.github.io/COVID-19-app/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                                </p>
                        </Card>
                    </Col>
                    <Col
                            m={6}
                            s={12}
                        >
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={NoteTaker} reveal waves="light" />}
                                reveal={<div>
                                    <p>This is supposed to be an application used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file. But it doesn't do most of that yet. Watch it progress!</p>
                                </div>
                                }
                                revealIcon={<Icon>more_vert</Icon>}
                                title="Note Taker"
                            >
                                <p>
                                    <a href="https://github.com/Megannh6349/Homework-11/" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                </p>
                                <p>
                                    <a href="https://mh-hw11.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
                                </p>
                            </Card>
                        </Col>
                </Row>
            </div>
        )
    }
}

export default ProjectsPage;