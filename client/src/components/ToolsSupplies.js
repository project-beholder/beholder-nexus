import React from 'react';

import TSItem from './TSItem';

import placeholder from '../assets/placeholder.jpg';

class ToolsSupplies extends React.Component {
    render () {
        return (
            <section className='.ts-section' style={{backgroundColor:`${this.props.type == 'Tools'? 'black':'white'}`, color:`${this.props.type == 'Tools'? 'white':'black'}`}}>
                <h2>{this.props.type}</h2>

                {this.props.list.map(items => (
                    <TSItem tsitem={items.item} eximg={placeholder} tsdescription={items.description} tsbuylink={items.buylink} />
                ))}
                
            </section>
        )
    };
}

export default ToolsSupplies;