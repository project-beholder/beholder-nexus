import React from 'react';

class TSItem extends React.Component {
    render () {
        return (
            <details className='ts-item'>
                <summary>{this.props.tsitem}</summary>

                <img src={this.props.eximg}/>
                <p>{this.props.tsdescription}</p>
                <a href={this.props.tsbuylink} target='_blank'>Buy online -&gt;</a>
            </details>
        )
    };
}

export default TSItem;