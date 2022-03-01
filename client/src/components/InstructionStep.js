import React from 'react';

class InstructionStep extends React.Component {
    render() {
        return (
            <section>
                Step { this.props.num }
            </section>
        )
    };
}

export default InstructionStep;