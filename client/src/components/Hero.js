import React from 'react';
import { useLocation } from 'react-router-dom';

import '../css/hero.css';

import tcmodel from '../assets/home/tc_model_1.png';

class Hero extends React.Component {
    render () {
        return (
            <header id="home-hero" style={{backgroundImage:`url(${this.props.herosrc})`}}>
                <div id="hero-container">
                    <h1 className="hero-heading">{this.props.heading}</h1>

                    {location.pathname=='/' ? <img className="hero-model" src={tcmodel} alt="Tinycade 3D Render" /> : null}

                </div>
                {location.pathname=='/' ? <p id="hero-scroll-prompt">SCROLL DOWN TO LEARN MORE</p> : null}
            </header>
        )
    };
}

export default Hero;