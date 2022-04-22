import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

import '../css/navbar.css';
// import '../js/navbar.js';
import Scrolling from '../js/navbar';

class Navbar extends React.Component {

    // componentDidMount() {
    //     var loadScript = function(src) {
    //         let e = document.createElement('script');
    //         e.type = 'text/javascript';
    //         e.src = src;
    //         e.async = false;
    //         e.defer = true;
    //         document.getElementsByTagName('head')[0].appendChild(e);
    //     }

    //     loadScript("../js/navbar.js");
    // }

    render() {
        return(
            <nav id="main-nav">
                <a id="nav-logo-link" href="/">
                    <img id="nav-logo" src={tinycadelogo} alt="Tinycade Logo" />
                    <span id="nav-title">tinycade</span>
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