import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

import '../css/landing.css';

import xrayview from '../assets/home/tinycade_x_ray.png';
import explodedview from '../assets/home/tinycade_exploded.png';
import homehero from '../assets/home/HOME_overview.svg';

class Home extends React.Component {
    render () {
        return (
            <main>
                <Hero herosrc={homehero} heading='tiny arcade experiences on a tiny budget'/>
                
                <section id='how-it-works' className='home-section'>
                    <h2>How does tinycade work?</h2>

                    <ol>
                        <li>
                            When playing a game, your phone camera turns on. </li>
                        <li>
                            The tinycade uses mirrors to reflect the image of the bottom of the controller. </li>
                        <li>
                            When the controller is moved, it blocks and unblocks hero cards that your phone camera can read to determine how you moved. </li>
                    </ol>

                    <figure>
                        <img id='x-ray-img' src={xrayview} alt='Tinycade x-ray view' />

                    </figure>
                </section>

                <section id='how-to-build' className='home-section'>
                    <h2>How do I build a tinycade?</h2>

                    <ol>
                        <li>
                            Obtain the recommended supplies. </li>
                        <li>
                            Follow the detailed and easy-to-understand <a href='/assembly'>instructions</a>.</li>
                    </ol>

                    <figure>
                        <img id="exploded-img" src={explodedview} alt="Tinycade exploded view" />
                    </figure>
                </section>

            </main>
        )
    };
}

export default Home;