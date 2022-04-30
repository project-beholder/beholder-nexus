import React from 'react';

/* Components */
import Hero from '../components/Hero.js';
import ToolsSupplies from '../components/ToolsSupplies.js';
import InstructionStep from '../components/InstructionStep.js';

import Tinycade from '../server_content/tinycade.json';
// import * from '../server_content/tinycade/'
import s1 from '../server_content/tinycade/s01a.webp';
import s2 from '../server_content/tinycade/s02a.webp';
import s3 from '../server_content/tinycade/s03a.webp';
import s4 from '../server_content/tinycade/s04a.webp';
import s5 from '../server_content/tinycade/s05a.webp';
import s6 from '../server_content/tinycade/s06a.webp';
import s7 from '../server_content/tinycade/s07a.webp';
import s8 from '../server_content/tinycade/s08a.webp';
import s9 from '../server_content/tinycade/s09a.webp';
import s10 from '../server_content/tinycade/s10a.webp';
import s11 from '../server_content/tinycade/s11tinycade.jpg';

import pieces from '../assets/pictorial2-assembly.jpg';

class Assembly extends React.Component {
    state = {
        tc: Tinycade,
        insimgs: [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11],
    };

    componentDidMount () {
        document.getElementById('nav-assembly').classList.add('activepage');
    }

    render () {
        // console.log((this.state.tc.steps)[0].num);
        return (
            <main>
                <Hero herosrc={pieces} heading='Tinycade Assembly' />
                
                {/* send specific tools/supplies as props data */}
                <ToolsSupplies type="Supplies" list={this.state.tc.supplies} />
                <ToolsSupplies type="Tools" list={this.state.tc.tools} />

                <article>
                    <h2>Steps</h2>

                    {this.state.tc.steps.map(step => (
                        <InstructionStep key={step.num} num={step.num} summary={step.summary} insdetail={step.detail} insimg={this.state.insimgs[step.num-1]} extralink={step.link} />
                    ))}

                </article>
                

            </main>
        )
    };
}

// use a for loop here
// iterate through database steps
//   that correspond to this page's
//   instructions
// pass as props to content component

export default Assembly;