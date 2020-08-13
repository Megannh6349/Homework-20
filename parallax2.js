import React from 'react';
import { Parallax } from 'react-materialize';
import Megan2 from './megan2.jpg';

class Parallax2 extends React.Component {
    render() {
        return (
            <div>
                <Parallax
                    image={<img alt="Megan laying in grass" src={Megan2} className="parallaxPics" />}
                    options={{
                        responsiveThreshold: 0
                    }}
                />
            </div>
        )
    }
}

export default Parallax2;