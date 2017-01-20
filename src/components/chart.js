// Functional import React from 'react'
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function average(data) {
    return _.round(sum(data)/data.length); 
}

export default (props) => {
    return (
        <div>
           <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesSpots />
                <SparklinesNormalBand />
            </Sparklines>
        </div>
    )
}

// <SparklinesReferenceLine type="mean" />
