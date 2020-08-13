import React from 'react';
import { Carousel } from 'react-materialize';


class CarouselComp extends React.Component {
    render() {
        return (
            <div>
                <Carousel
                    carouselId="Carousel-2"
                    className="white-text center"
                    options={{
                        fullWidth: true,
                        indicators: true
                    }}
                >
                    <div className="cyan lighten-4">
                        <h1>
                            About Me
                    </h1>
                        <p>
                            I'm a full stack web developer currently residing in Monmouth Junction, NJ
                    </p>
                        <br />
                        <p>
                            I work full time representing Microsoft as a Market Manager, and part time at a Brix City, a New Jersey craft brewery.
                    </p>
                    </div>
                    <div className="cyan lighten-3">
                        <h2>
                            Hobbies
                    </h2>
                        <p>
                            I enjoy a wide variety of hobbies, including:
                    </p>
                        <ul>
                            <li>Hiking</li>
                            <li>Kayaking</li>
                            <li>Craft Beer</li>
                            <li>Video Games</li>
                            <li>Coding Until I Get Carpal Tunnel in Both Hands</li>
                            <li>Playing Piano</li>
                            <li>Singing</li>
                        </ul>
                    </div>
                    <div className="cyan lighten-2">
                        <h2>
                            How Did I Get Here?
                    </h2>
                        <p>
                            My grandfather was a programmer in NYC back when computers were the size of the average bedroom
                        </p>
                        <br />
                        <p>
                            He's a huge role model of mine, so I took an interest in it as well
                        </p>
                        <br />
                        <p>
                            I began studying at Rutgers Full Stack Coding Bootcamp in February 2020 and have been hating myself,
                            I mean learning, ever since.
                    </p>
                    </div>
                    <div className="cyan lighten-1">
                        <h2>
                            Why a Carousel?
                    </h2>
                        <p>
                            Look, I get it. There was probably a better way to do this
                    </p>
                        <br />
                        <p>
                            Back in week 2 of learning web development, I was introduced to Bootstrap. We had an assignment where we were supposed to use a few components on a page.
                    </p>
                        <br />
                        <p>
                            I attempted to use a carousel. It did not work. This surprised literally no one
                    </p>
                        <br />
                        <p>
                            I asked a TA for help, and he said, "Oh man, yeah those are really hard. I still have trouble with them sometimes"
                    </p>
                        <br />
                        <p>
                            This carousel is dedicated to you, Andrew. It is useless and a blatant show of knowledge and power, and I regret nothing
                    </p>
                    </div>
                    <div className="cyan">
                        <h2>
                            Pets
                    </h2>
                        <p>
                            I have four cats - Freya, Loki, Athena, and Persephone
                    </p>
                        <br />
                        <p>
                            I also have a dog named Max. He is an Akita, and the world's goodest boi
                    </p>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default CarouselComp;