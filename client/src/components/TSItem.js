import React from 'react';

class TSItem extends React.Component {
    render () {
        return (
            <details className='ts-item'>
                <summary>{this.props.item}</summary>
                
                <img src={this.props.eximg}/>
                <p>{this.props.description}</p>
                <a href={this.props.buylink} target='_blank'>Buy online -&gt;</a>
            </details>
        )
    };
}

export default TSItem;