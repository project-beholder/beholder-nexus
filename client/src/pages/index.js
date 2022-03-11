import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

import xrayview from '../assets/home/tinycade_x_ray.png';
import explodedview from '../assets/home/tinycade_exploded.png';

class Home extends React.Component {
    render () {
        return (
            <main>
                <Hero heading='tiny arcade experiences on a tiny budget'/>
                

                <section id="how-it-works" className="page-section is-dark">
                <div className="container">
                    <h2>How does tinycade work?</h2>
                    <div className="section-items">
                    <ol>
                        <li>
                        When playing a game, your phone camera turns on.
                        </li>

                        <li>
                        The tinycade uses mirrors to reflect the image to the bottom of the controller.
                        </li>

                        <li>
                        When the controller is moved, it blocks and unblocks hero cards that your phone camera can read to determine how you moved.
                        </li>
                    </ol>
                    <img id="x-ray-img" src={xrayview} alt="Tinycade x-ray view" />
                    <span className="x-ray-label" id="x-ray-label-1">1 PHONE CAMERA</span>
                    <span className="x-ray-label" id="x-ray-label-2">2 MIRROR ONE</span>
                    <span className="x-ray-label" id="x-ray-label-3">3 CONTROLLER</span>
                    <span className="x-ray-label" id="x-ray-label-4">2 MIRROR TWO</span>
                    </div>
                </div>
                </section>

                <section id="how-to-build" className="page-section">
                <div className="container">
                    <h2>How do I build a tinycade?</h2>
                    <div className="section-items">
                    <ol>
                        <li>
                        Buy the recommended <a href="#">supplies</a>.
                        </li>

                        <li>
                        Follow our detailed and easy to understand <a href="#">instructions</a>.
                        </li>

                        <li>
                        There is no third step, that is all.
                        </li>
                    </ol>

                    <img id="exploded-img" src={explodedview} alt="Tinycade exploded view" />
                    </div>
                </div>
                </section>

                <section id="what-to-play" className="page-section is-dark placeholder">
                <div className="container">
                    <h2 className="placeholder">Featured game</h2>
                </div>
                </section>

            </main>
        )
    };
}

export default Home;