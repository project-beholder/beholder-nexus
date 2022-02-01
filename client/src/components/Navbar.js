import React from 'react';

class Navbar extends React.Component {
    render() {
        return(
            <nav>
                <button id='nav-toggle'>&lt; MENU</button>
                <span id='nav-links'>
                    <a href='http://tinycade.io'>HOME</a> // 
                    <a href=''>ASSEMBLY</a> //
                    <a href=''>GAME LIBRARY</a> //
                    <a href=''>HELP</a>
                </span>
            </nav>
        )
    };
}

export default Navbar;