import React from 'react';

import TSItem from './TSItem';

import placeholder from '../assets/placeholder.jpg';

class ToolsSupplies extends React.Component {
    render () {
        return (
            <section className='.ts-section' style={{backgroundColor:`${this.props.type == 'Tools'? 'black':'white'}`, color:`${this.props.type == 'Tools'? 'white':'black'}`}}>
                <h2>{this.props.type}</h2>
                
                {/* iterate this */}
                <TSItem item="CARDBOARD" eximg={placeholder} description="The very structure of the arcade cabinet" buylink=""/>

                <TSItem item="X-ACTO KNIFE" eximg={placeholder} description="A knife to cut the cardboard" buylink=""/>

            </section>
        )
    };
}

export default ToolsSupplies;