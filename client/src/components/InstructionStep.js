import React from 'react';

import placeholder from '../assets/placeholder.jpg';

import '../css/instructions.css';

class InstructionStep extends React.Component {

    render() {
        return (
            <section className='instruction-step'> 
                <h3>Step { this.props.num }: {this.props.summary }</h3>
                <p>{ this.props.insdetail }</p>
                <p><a href={this.props.extralinkhref}>{this.props.extralink}</a></p>
                <img className='instruction-img' src={placeholder} alt='placeholder image' />
            </section>
        )
    };
}

export default InstructionStep;