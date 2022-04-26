import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo.svg';

import '../css/navbar.css';
// import '../js/navbar.js';
import Scrolling from '../js/navbar';

class Navbar extends React.Component {
    state = {
        scrollPos: 0,
    };

    componentDidMount() {
        document.addEventListener('scroll', (e)=> { 
   
            this.setState({ scrollPos: window.scrollY });
        });
    }

    componentDidUpdate() {
        const navbar = document.getElementById('main-nav');
        if (this.state.scrollPos > 50) {
            if (!navbar.classList.contains('dark-scroll')){
                navbar.classList.add('dark-scroll');
            }
        }
        else {
            if (navbar.classList.contains('dark-scroll')) {
                navbar.classList.remove('dark-scroll');
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll');
    }

    render() {
        // console.log(this.state.scrollPos);

        return(
            <nav id="main-nav">
                <a id="nav-logo-link" href="/">
                    <img id="nav-logo" src={tinycadelogo} alt="Tinycade Logo" />
                    <span id="nav-title">tinycade</span>
                </a>
                <span id="nav-links">
                    <a href="/assembly" id="nav-assembly" className="nav-link-selectable">ASSEMBLY</a>//
                    <a href="/game-library" id="nav-games" className="nav-link-selectable">GAME LIBRARY</a>// 
                    <a href="/help" id="nav-help" className="nav-link-selectable">HELP</a>
                </span>

            </nav>
        )
    };
}

export default Navbar;