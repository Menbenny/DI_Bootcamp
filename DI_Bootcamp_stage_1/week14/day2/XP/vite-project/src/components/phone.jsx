import React, { useState } from 'react';

function Phone({ phoneInfo }) {
    const [brand ] = useState('Samsung');
    const [model ] = useState('Galaxy S20');
    const [color, setColor ] = useState('black');
    const [year ] = useState('2020')

    return (
        <div>
              <h2>Phone details:</h2>  
                <p>Brand: {brand}</p>
                <p>Model: {model}</p>
                <p>Year: {year}</p>
                <p>Color: {color}</p> 
        </div>
    );
}

export default Phone;