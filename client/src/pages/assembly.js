import React from 'react';

/* Components */
import Hero from '../components/Hero.js';
import InstructionStep from '../components/InstructionStep.js';

class Assembly extends React.Component {
    render () {
        return (
            <main>
                <Hero heading='Instructions' />
                <h1>Instructions</h1>

                <InstructionStep num="1" />
                <InstructionStep num="2" />

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