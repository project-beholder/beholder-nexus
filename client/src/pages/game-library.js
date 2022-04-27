import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

import games from '../../../server/content/games.json';

import gameshero from '../assets/pictorial2-games.jpg';
import game_pong from '../assets/pictorial-pong.png';

import '../css/games.css';

class GameLibrary extends React.Component {
    state = {
        gArray: games,
        gameTitle: 'Pong',
        gameUrl: '',
        gameSummary: 'A mini arcade rendition of the classic game.',
        gameImage: '',
        gameControls: '',
        gameController: '',
    };

    componentDidMount () {
        document.getElementById('nav-games').classList.add('activepage');
    }

    render () {

        return (
            <main>
                <Hero herosrc={gameshero} heading='Game Library' />
                
                {/* <section id='featured-game' style={{backgroundImage:`url(${this.state.gameImage})`}}>
                </section> */}

                <section id='featured-game' style={{backgroundImage:`url(${game_pong})`}}>
                    <h2>{this.state.gameTitle}</h2>

                    <p>
                        {this.state.gameSummary}
                    </p>
                    <p><b>Required Controller</b></p>

                    <button id='game-play-btn'>Play {this.state.gameTitle} -&gt;</button>
                    <a href={this.state.gameController}>Build Controller -&gt;</a>
                    
                </section>
            </main>
        )
    };
}

export default GameLibrary;