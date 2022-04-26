import React from 'react';

import placeholder from '../assets/placeholder.jpg';

import '../css/instructions.css';

class InstructionStep extends React.Component {

    render() {
        return (
            <section className='instruction-step'> 
                <h3>Step { this.props.num }: {this.props.summary }</h3>
                <p>{ this.props.insdetail }</p>
                {this.props.extralink != '' ? <p><a href={this.props.extralink}>Referenced link</a></p> : null}

                {/* <img className='instruction-img' src={this.props.insimg} alt='placeholder image' /> */}
                <img className='instruction-img' src={placeholder} alt='placeholder image' />
            </section>
        )
    };
}

export default InstructionStep;