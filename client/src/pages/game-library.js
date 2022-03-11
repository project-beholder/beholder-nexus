import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

class GameLibrary extends React.Component {
    render () {
        return (
            <main>
                <Hero heading='Game Library' />
                <h1>Games</h1>
            </main>
        )
    };
}

export default GameLibrary;