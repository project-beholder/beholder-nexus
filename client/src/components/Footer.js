import React from 'react';

/* media */
import tinycadelogo from '../assets/tinycade_logo_dark.svg';
import acmelogo from '../assets/acme_logo.svg';
import atlaslogo from '../assets/atlas_logo.png';
import culogo from '../assets/cu_logo.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <nav id='footer-nav'>
                    <a class='footer-logo-link' href='https://www.tinycade.io'>
                        <img class='footer-logo' alt='Tinycade Logo' src={tinycadelogo} />
                    </a>
                </nav>

                <section id='footer-contributors'>
                    <h3>Contributors</h3>
                    <a class='footer-link' href='https://petroochio.github.io' target='_blank'>Peter Gyory</a>
                    <a class='footer-link' href='https://clementzheng.info/' target='_blank'>Clement Zheng</a>
                    <a class='footer-link' href='#' target='_blank'>Dylan Turner</a>
                    <a class='footer-link' href='#' target='_blank'>Perry Owens</a>
                    <a class='footer-link' href='https://www.colorado.edu/atlas/ellen-yi-luen-do' target='_blank'>Ellen Do</a>
                    <a class='footer-link' href='#' target='_blank'>Allison Palmer</a>
                    <a class='footer-link' href='#' target='_blank'>Rhys Ruefort</a>
                </section>

                <section id='footer-logos'>
                    <h3><a class='underline' href='https://github.com/Tinycade/tinycade-homepage/blob/main/LICENSE'>read license</a></h3>

                    <div id='footer-logo-block'>
                        <a href="https://www.colorado.edu/atlas/acme-lab">
                            <img src={acmelogo} alt="ACME Lab Logo" />
                        </a>
                        <a href="https://www.colorado.edu/atlas/">
                            <img class="atlas-brand" src={atlaslogo} alt="ATLAS Institute Logo" />
                        </a>
                        <a class="cu-brand" href="https://www.colorado.edu">
                            <img src={culogo} alt="University of Colorado Boulder Logo" />
                        </a>
                    </div>
                </section>

            </footer>
        )
    };
}

export default Footer;