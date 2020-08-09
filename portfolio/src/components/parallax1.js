import React from 'react';
import { Parallax } from 'react-materialize';
import Megan1 from './img/megan1.jpg';
import MeganSunflower from './img/meganSunflower.jpg';

class Parallax1 extends React.Component {
    render() {
        return (
            <div>
                <Parallax
                    image={<img alt="Megan laying in grass" src={Megan1} className="parallaxPics" />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
                <div className="section">
                    <div className="row container">
                        <h1 className="header">
                            Welcome to my portfolio
                    </h1>
                        <h4 className="grey-text text-darken-3 lighten-3">
                            This is just a little something I threw together using React. Here, you'll see a little bit about me, my skills as a developer, and some projects I've done.
                    </h4>
                    </div>
                </div>
                <Parallax
                    image={<img alt="Megan with a statue" src={MeganSunflower} className="parallaxPics" />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
        )
    }
}

export default Parallax1;