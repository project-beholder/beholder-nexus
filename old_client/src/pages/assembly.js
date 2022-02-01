import React from 'react';

/* Components */
import Hero from '../components/Hero.js';
import Content from '../components/Content.js';

class Assembly extends React.Component {
    render () {
        return (
            <main>
                <h1>Instructions</h1>
                <Content />
                <Content />
            </main>
        )
    };
}

export default Assembly;