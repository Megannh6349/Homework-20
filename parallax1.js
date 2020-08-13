import React from 'react';
import { Parallax } from 'react-materialize';
import Megan1 from './megan1.jpg';
import MeganSunflower from './meganSunflower.jpg';

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
                <div className="section cyan lighten-2">
                    <div className="row container">
                        <h1 className="header white-text">
                            Welcome to my portfolio
                    </h1>
                        <h4 className="white-text">
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