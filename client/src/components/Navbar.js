import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

import '../css/navbar.css';

class Navbar extends React.Component {
    render() {
        return(
            // <nav>
            //     <a class='nav-logo-link'>
            //         <img src={tinycadelogo} alt='Tinycade Logo' />
            //         <span class='nav-title'>tinycade</span>
            //     </a>
            //     <button id='nav-toggle'>&lt; MENU</button>
            //     <span id='nav-links'>
            //         <a href='/'>HOME</a> // 
            //         <a href='/assembly'>ASSEMBLY</a> //
            //         <a href='/game-library'>GAME LIBRARY</a> //
            //         <a href='/help'>HELP</a>
            //     </span>
            // </nav>

            <nav>
                <a class="nav-logo-link" href="https://www.tinycade.io">
                    <span class="nav-logo"><img  src={tinycadelogo} alt="Tinycade Logo" /></span>
                    <span class="nav-title">beholder</span>
                </a>

                <div class="nav-menu">
                    <button id="nav-toggle">&lt; MENU</button>
                    <span class="nav-links">
                    <a class="selected" href="/">HOME</a>
                    //
                    <a href="/assembly">ASSEMBLY</a>
                    //
                    <a href="/game-library">GAME LIBRARY</a>
                    //
                    <a href="/help">HELP</a>
                    </span>
                </div>
            </nav>
        )
    };
}

export default Navbar;