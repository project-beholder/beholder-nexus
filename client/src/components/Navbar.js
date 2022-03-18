import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

import '../css/navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav id="main-nav" className="dark-scroll">
                <a id="nav-logo-link" href="/">
                    <img id="nav-logo" src={tinycadelogo} alt="Tinycade Logo" />
                    <span id="nav-title">beholder</span>
                </a>
                <span id="nav-links">
                    <a href="/assembly">ASSEMBLY</a>//
                    <a href="/game-library">GAME LIBRARY</a>// 
                    <a href="/help">HELP</a>
                </span>
            </nav>
        )
    };
}

export default Navbar;