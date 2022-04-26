import React from 'react';

/* Components */
import Hero from '../components/Hero.js';

import controllers from '../assets/pictorial-controllers.jpg';

/* css */
import '../css/help.css';

class Help extends React.Component {
    componentDidMount () {
        document.getElementById('nav-help').classList.add('activepage');
    }

    render () {
        return (
            <main>
                <Hero herosrc={controllers} heading='Help, I Lost Control'/>

                <section id='help-faq'>
                    <h2>FAQ</h2>
                    <article id='faq-qna'>
                        <div>
                            <h3>HOW DO I GET STARTED WITH TINYCADE??</h3>
                            <p>Start by following our instructions here to build your very own arcade cabinet. Next, you'll want to head over to games and find a game you'd like to play. Simply build that game's controller, slap it in your newly built arcade cabinet, and enjoy!</p>
                        </div>
                        
                        <div>
                            <h3>DO I NEED TO KNOW HOW TO SOLDER?</h3>
                            <p>Not at all! Anyone can build their very own Tinycade from nothing but cardboard, mirrors, and hot glue!</p>
                        </div>

                        <div>
                            <h3>CAN I DESIGN MY OWN GAME FOR TINYCADE?</h3>
                            <p>Instructions for game development coming soon!</p>
                        </div>
                        
                    </article>
                </section>

                <section id='help-contact'>
                    <h2>Contact Us</h2>
                    <div id='contact-flex-container'>
                        <form id='help-contact-form'>
                            <label htmlFor="contact-name">Name</label>
                            <input type="text" id="contact-name" required placeholder="First" />
                            <input type="text" id="contact-lastname" required placeholder="Last" />

                            <label htmlFor="contact-email">Email</label>
                            <input type="text" id="contact-email" placeholder="foo@example.com" />

                            <label htmlFor="contact-message">Message</label>
                            <textarea id="contact-message" required placeholder="How can we help?"  cols='50' rows='5' />
                        </form>
                        <button type="submit" form="help-contact-form" value="Send" id='contact-send'>SEND MESSAGE -&gt;</button>
                    </div>
                </section>

            </main>
        )
    };
}

export default Help;