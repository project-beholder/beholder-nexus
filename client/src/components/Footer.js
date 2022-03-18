import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo_dark.svg';
import acmelogo from '../assets/acme_logo.svg';
import atlaslogo from '../assets/atlas_logo.png';
import culogo from '../assets/cu_logo.png';

import '../css/footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav id='footer-nav'>
                    <h3><a className='footer-logo-link' href='/'>
                        <img className='footer-logo' alt='Tinycade Logo' src={tinycadelogo} />
                        Beholder
                    </a></h3>

                    <ul>
                        <li><a className='footer-menu-link' href='/'>Home</a> //</li>
                        <li><a className='footer-menu-link' href='/assembly'>Assembly</a> //</li>
                        <li><a className='footer-menu-link' href='/game-library'>Game Library</a> //</li>
                        <li><a className='footer-menu-link' href='/help'>Help</a> //</li>
                    </ul>
                </nav>

                <section id='footer-contributors'>
                    <h3>Contributors</h3>

                    <ul>
                        <li><a className='footer-link' href='https://petroochio.github.io' target='_blank'>Peter Gyory</a></li>
                        <li><a className='footer-link' href='https://clementzheng.info/' target='_blank'>Clement Zheng</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Dylan Turner</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Perry Owens</a></li>
                        <li><a className='footer-link' href='https://www.colorado.edu/atlas/ellen-yi-luen-do' target='_blank'>Ellen Do</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Allison Palmer</a></li>
                        <li><a className='footer-link' href='#' target='_blank'>Rhys Ruefort</a></li>
                    </ul>
                    
                </section>

                <section id='footer-logos'>
                    <h3><a className='underline' href='https://github.com/Tinycade/tinycade-homepage/blob/main/LICENSE'>read license</a></h3>

                    <div id='footer-logo-block'>
                        <figure id="acmelogo" className='logo-container'>
                            <a href="https://www.colorado.edu/atlas/acme-lab">
                                <img src={acmelogo} alt="ACME Lab Logo" />
                            </a>
                        </figure>

                        <figure id="atlaslogo" className='logo-container'>
                            <a href="https://www.colorado.edu/atlas/">
                                <img className="atlas-brand" src={atlaslogo} alt="ATLAS Institute Logo" />
                            </a>
                        </figure>
                        
                        <figure id="ucblogo" className='logo-container'>
                            <a className="cu-brand" href="https://www.colorado.edu" id="ucblogo">
                                <img src={culogo} alt="University of Colorado Boulder Logo" />
                            </a>
                        </figure>
                        
                    </div>
                </section>

            </footer>
        )
    };
}

export default Footer;