import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <a class='nav-logo-link'>
                    <img src={tinycadelogo} alt='Tinycade Logo' />
                    <span class='nav-title'>tinycade</span>
                </a>
                <button id='nav-toggle'>&lt; MENU</button>
                <span id='nav-links'>
                    <a href='/'>HOME</a> // 
                    <a href='/assembly'>ASSEMBLY</a> //
                    <a href=''>GAME LIBRARY</a> //
                    <a href=''>HELP</a>
                </span>
            </nav>
        )
    };
}

export default Navbar;