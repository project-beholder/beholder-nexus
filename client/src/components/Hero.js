import React from 'react';

/* media */
import tcmodel from '../assets/home/tc_model_1.png';

import '../css/hero.css';

// reference {this.props.children}

class Hero extends React.Component {
    render () {
        return (

            <section id="home-hero">
                <div id="hero-container">
                    <h1 className="hero-heading">{this.props.heading}</h1>
                    <img className="hero-model" src={tcmodel} alt="Tinycade 3D Render" />
                </div>
                <p id="hero-scroll-prompt">SCROLL DOWN TO LEARN MORE</p>
            </section>
        )
    };
}

export default Hero;