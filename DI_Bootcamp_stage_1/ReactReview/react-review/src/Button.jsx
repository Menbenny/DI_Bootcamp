import { useState } from 'react';

// const style = {

// }
const Button = (props) => {

   

    // const firstFunc = () => {
    //     console.log('Button response ');
    //     alert('Button response ')

    
    // }
 
    //? html tags are called fragments - for properly structing tags <></>
    //! react export only one tag - fragment sorta allows for multiple tags

    return (
        <>
            <button onClick={props.buttonFunc} style={{color: props.color, background: "white"}}>
               {props.text}
            </button>
            <p>
                {props.testVal}
            </p>
        </>
        
    )
    
}

export default Button