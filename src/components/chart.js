import _ from 'lodash'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
    const kelvin = _.sum(data)/data.length;
    const fahrenheit = kelvin * 1.8 - 459.67;
    return _.round(fahrenheit)
}

const Chart = (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div style={{textAlign: 'center'}}>{average(props.data)} {props.unit}</div>
        </div>
    )
}

export default Chart