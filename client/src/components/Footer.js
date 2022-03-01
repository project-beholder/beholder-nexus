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
            // <footer>
            //     <nav id='footer-nav'>
            //         <a class='footer-logo-link' href='https://www.tinycade.io'>
            //             <img class='footer-logo' alt='Tinycade Logo' src={tinycadelogo} />
            //         </a>

            //         <a class="footer-menu-link" href="/">Home //</a>
            //         <a class="footer-menu-link" href="/assembly">Assembly //</a>
            //         <a class="footer-menu-link" href="/game-library">Game Library //</a>
            //         <a class="footer-menu-link" href="/help">Help //</a>
            //     </nav>

            //     <section id='footer-contributors'>
            //         <h3>Contributors</h3>
            //         <a class='footer-link' href='https://petroochio.github.io' target='_blank'>Peter Gyory</a>
            //         <a class='footer-link' href='https://clementzheng.info/' target='_blank'>Clement Zheng</a>
            //         <a class='footer-link' href='#' target='_blank'>Dylan Turner</a>
            //         <a class='footer-link' href='#' target='_blank'>Perry Owens</a>
            //         <a class='footer-link' href='https://www.colorado.edu/atlas/ellen-yi-luen-do' target='_blank'>Ellen Do</a>
            //         <a class='footer-link' href='#' target='_blank'>Allison Palmer</a>
            //         <a class='footer-link' href='#' target='_blank'>Rhys Ruefort</a>
            //     </section>

            //     <section id='footer-logos'>
            //         <h3><a class='underline' href='https://github.com/Tinycade/tinycade-homepage/blob/main/LICENSE'>read license</a></h3>

            //         <div id='footer-logo-block'>
            //             <a href="https://www.colorado.edu/atlas/acme-lab">
            //                 <img src={acmelogo} alt="ACME Lab Logo" />
            //             </a>
            //             <a href="https://www.colorado.edu/atlas/">
            //                 <img class="atlas-brand" src={atlaslogo} alt="ATLAS Institute Logo" />
            //             </a>
            //             <a class="cu-brand" href="https://www.colorado.edu">
            //                 <img src={culogo} alt="University of Colorado Boulder Logo" />
            //             </a>
            //         </div>
            //     </section>

            // </footer>

            <footer id="footer">
                <div id="footer-content"class="container">
                    <div id="footer-menus">
                    <a class="footer-logo-link" href="https://www.tinycade.io">
                        <img class="footer-logo" src={tinycadelogo} alt="Tinycade Logo" />
                        <span class="footer-title">beholder</span>
                    </a>

                    <a class="footer-menu-link" href="/">Home //</a>
                    <a class="footer-menu-link" href="/assembly">Assembly //</a>
                    <a class="footer-menu-link" href="/game-library">Game Library //</a>
                    <a class="footer-menu-link" href="/help">Help //</a>
                    </div>
                    <div id="footer-contributors">
                        <h3>Contributors</h3>
                        <div class="footer-names-cols">
                            <a class="footer-link" href="https://petroochio.github.io">Peter Gyory</a>
                            <a class="footer-link" href="https://clementzheng.info/">Clement Zheng</a>
                            <a class="footer-link" href="#">Dylan Turner</a>
                            <a class="footer-link" href="#">Perry Owens</a>
                            <a class="footer-link" href="https://www.colorado.edu/atlas/ellen-yi-luen-do">Ellen Do</a>
                            <a class="footer-link" href="#">Allison Palmer</a>
                            <a class="footer-link" href="#">Rhys Ruefort</a>
                        </div>
                    </div>
                    <div id="footer-logos">
                    <h3><a class="underline" href="https://github.com/Tinycade/tinycade-homepage/blob/main/LICENSE">read license</a></h3>
                    <div class="logo-block">
                        <a href="https://www.colorado.edu/atlas/acme-lab"><img src={acmelogo} alt="ACME Lab Logo" /></a>
                        <a href="https://www.colorado.edu/atlas/"><img class="atlas-brand" src={atlaslogo} alt="ATLAS Institute Logo" /></a>
                        <a class="cu-brand" href="https://www.colorado.edu"><img src={culogo} alt="University of Colorado Boulder Logo" /></a>
                    </div>
                    </div>
                </div>
            </footer>
        )
    };
}

export default Footer;