import React from 'react';
import { Footer } from 'react-materialize';
import meganPro from '../components/img/croppedProPhoto.jpg';

class FooterComp extends React.Component {
    render() {
        return (
        <Footer
            className="example cyan lighten-2"
            copyrights="Copyright Megan Henning 2020"
            links={<ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Megannh6349" className="icons"><img height="32" width="32" alt="github logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/megan-henning/" className="icons"><img height="32" width="32" alt="linkedin logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" /></a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.codecademy.com/profiles/Megannh6349" className="icons"><img height="32" width="32" alt="codecademy logo" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/codecademy.svg" /></a></li>
            </ul>}>
            <div className="row">
                <div className="col"><img src={meganPro} height='40%' width='40%' alt="Headshot of Megan" />
                </div>
                <div className="col">
                    <h5 className="white-text">
                        Megan Henning
                    </h5>
                    <div className="grey-text text-lighten-4">
                        <p><i className="material-icons">contact_mail</i><a target="_blank" rel="noopener noreferrer" href="mailto:megannh6349@gmail.com" >megannh6349@gmail.com</a></p>
                        <p><i className="material-icons">contact_phone</i>(732) 236-0920</p>
                    </div>
                </div>
            </div>
        </Footer>
        )
    }
}

export default FooterComp;