import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

import games from '../server_content/games.json';

import gameshero from '../assets/pictorial2-games.jpg';

import game_pong from '../server_content/games/pong.png';
import game_claw from '../server_content/games/claw.png';
import game_devolta from '../server_content/games/de_volta.png';

import '../css/games.css';

class GameLibrary extends React.Component {
    state = {
        gArray: games,
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

                {/* {this.state.gArray.map(game => (
                    <section className="featured-game" style={{backgroundImage:`url(${game.image})`}}>
                    <h2>{game.title}</h2>

                    <p>
                        {game.summary}
                    </p>

                    <a href={game.url}><button id='game-play-btn'>Play {game.title} -&gt;</button></a>
                    <a href={game.controller}>Build Controller -&gt;</a>
                    
                </section>
                ))} */}

                <section className="featured-game" style={{backgroundImage:`url(${game_pong})`}}>
                    <h2>Pong</h2>

                    <p>
                        A miniature rendition of the classic game
                    </p>
                    {/* <p><b>Required Controller</b></p> */}

                    <button id='game-play-btn'>Play Pong -&gt;</button>
                    <a href={this.state.gameController}>Build Controller -&gt;</a>
                    
                </section>
                <section className="featured-game" style={{backgroundImage:`url(${game_claw})`}}>
                    <h2>CLAW</h2>

                    <p>
                    A classic 2D shooter where you grab other ships and use their weapons as their own
                    </p>
                    {/* <p><b>Required Controller</b></p> */}

                    <a href="http://claw.tinycade.io"><button id='game-play-btn'>Play CLAW -&gt;</button></a>
                    <a href="claw.tinycade.io">Build Controller -&gt;</a>
                    
                </section>
                <section className="featured-game" style={{backgroundImage:`url(${game_devolta})`}}>
                    <h2>De Volta</h2>

                    <p>
                    A space hopping game where you must avoid past versions of your self on your way home
                    </p>
                    {/* <p><b>Required Controller</b></p> */}

                    <a href="http://devolta.tinycade.io"><button id='game-play-btn'>Play De Volta -&gt;</button></a>
                    <a href="devolta.tinycade.io">Build Controller -&gt;</a>
                    
                </section>
            </main>
        )
    };
}

export default GameLibrary;