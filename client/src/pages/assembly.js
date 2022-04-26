import React from 'react';

/* Components */
import Hero from '../components/Hero.js';
import ToolsSupplies from '../components/ToolsSupplies.js';
import InstructionStep from '../components/InstructionStep.js';

import Tinycade from '../../../server/content/tinycade.json';

import pieces from '../assets/pictorial2-assembly.jpg';

class Assembly extends React.Component {
    state = {
        tc: Tinycade,
    };

    componentDidMount () {
        document.getElementById('nav-assembly').classList.add('activepage');
    }

    render () {
        console.log((this.state.tc.steps)[0].num);
        return (
            <main>
                <Hero herosrc={pieces} heading='Tinycade Assembly' />
                
                <ToolsSupplies type="Supplies" />
                <ToolsSupplies type="Tools" />

                <article>
                    <h2>Steps</h2>

                    {this.state.tc.steps.map(step => (
                        <InstructionStep num={step.num} summary={step.summary} insdetail={step.detail} insimg={step.image} extralink={step.link} />
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