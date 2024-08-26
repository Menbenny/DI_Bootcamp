//PArt 1

// import React from 'react'

// function Car({ carinfo }) {
//     return (
//         <header>
//             This car is {carinfo.model} 
//         </header>
//     )
// }

import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
    const [color, setColor ] = usestate('red')

    return (
        <div>
            <header>
                This car is  {color} {colorInfo.model}
            </header>
            <Garage size="small"/>
        </div>
    )
}

export default Car;
