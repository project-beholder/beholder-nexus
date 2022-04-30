import React from 'react';

import TSItem from './TSItem';

import '../css/instructions.css';

import placeholder from '../assets/placeholder.jpg';
import xacto from '../server_content/tinycade/xacto.png';
import printer from '../server_content/tinycade/printer.png'

class ToolsSupplies extends React.Component {
    render () {
        return (
            <section className='ts-section' style={{backgroundColor:`${this.props.type == 'Tools'? 'black':'white'}`, color:`${this.props.type == 'Tools'? 'white':'black'}`}}>
                <h2>{this.props.type}</h2>

                <div id="ts-container">{this.props.list.map(items => (
                    <TSItem key={items.item} tsitem={items.item} eximg={printer} tsdescription={items.description} tsbuylink={items.buylink} />
                ))}
                </div>
                
            </section>
        )
    };
}

export default ToolsSupplies;