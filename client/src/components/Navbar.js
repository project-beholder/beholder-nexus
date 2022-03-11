import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

import '../css/navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            <nav className="dark-scroll">
                <a id='nav-logo-link' href="/">
                    <img id="nav-logo" src={tinycadelogo} alt='Tinycade Logo' />
                    <span id='nav-title'>beholder</span>
                </a>
                <span id='nav-links'>
                    <a href='/assembly'>ASSEMBLY</a>//
                    <a href='/game-library'>GAME LIBRARY</a>// 
                    <a href='/help'>HELP</a>
                </span>
            </nav>

            // <nav>
            //     <a className="nav-logo-link" href="/">
            //         <span id="nav-logo"><img  src={tinycadelogo} alt="Tinycade Logo" /></span>
            //         <span id="nav-title">beholder</span>
            //     </a>

            //     <div className="nav-menu">
            //         <button id="nav-toggle">&lt; MENU</button>
            //         <span className="nav-links">
            //         <a className="selected" href="/">HOME</a>
            //         //
            //         <a href="/assembly">ASSEMBLY</a>
            //         //
            //         <a href="/game-library">GAME LIBRARY</a>
            //         //
            //         <a href="/help">HELP</a>
            //         </span>
            //     </div>
            // </nav>
        )
    };
}

export default Navbar;