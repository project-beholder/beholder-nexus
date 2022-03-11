import React from 'react';

/* Components */
import Hero from '../components/Hero.js';
import InstructionStep from '../components/InstructionStep.js';

class Assembly extends React.Component {
    render () {
        return (
            <main>
                <Hero heading='Tinycade Assembly' />
                <h1>Instructions</h1>

                <article>
                    <InstructionStep num="1" summary="summary from database" insdetail="details from database" extralink="a link to click on??" extralinkhref="the://url-to-actually-click.on" />
                    <InstructionStep num="2" summary="Cut out the template" insdetail="What to do about multi-paragraph...?" />
                    <InstructionStep num="3" summary="Attach the cutouts to the cardboard" insdetail="test \n test" />
                    <InstructionStep num="4" summary="Cut out the cardboard" insdetail="stuff" />
                    <InstructionStep num="5" summary="Assemble the mirrors" insdetail="something" />
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