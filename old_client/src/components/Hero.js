import React from 'react';

/* media */
import tcmodel from '../assets/home/tc_model_1.png';


// reference {this.props.children}

class Hero extends React.Component {
    render () {
        return (
            <header id='home-hero'>
                <h1>Tiny arcade experiences on a tiny budget.</h1>
                <img class='hero-model' alt='Tinycade 3D Render' src={tcmodel} />
                <p id='hero-scroll-prompt'>SCROLL DOWN TO LEARN MORE</p>
            </header>
        )
    };
}

export default Hero;