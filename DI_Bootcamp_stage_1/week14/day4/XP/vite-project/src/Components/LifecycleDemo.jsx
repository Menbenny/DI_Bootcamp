import React from "react";
import { useState, useEffect, useRef } from 'react';
import Child from './Child';

const LifecycleDemo = () => {
    const [favouriteColor, setFavouriteColor] = useState('red');
    const [ counte, setCount] = useState(0);
    const [showChild, setShowChild] = useState(true);
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current += 1;
        console.log('Component rendered', renderCount.current);
        
    });

    useEffect(()=> {
        if(renderCount.current > 1) {
            console.log('in getSnapShot before update');
            console.log('after update');
            
        }
    }, [favouriteColor]);

    const shouldUpdate = () => {
        if(favouriteColor === ' blue') {
            console.log('should Component Update: false');
            return false
        }
        console.log('should component update: true');
        return true;
    };

    const changeColor = () => {
        if(shouldUpdate()){
            setFavouriteColor('yellow');
            setCount((prevCount)=> prevCount + 1)
        }
    };

    const toggleChild = () => {
        setShowChild((prevShowChild)=> !prevShowChild)
    }

    return (
        <div style={{ border: '1px solid grey', padding: '20px', marginTop: '20px'}}>
            <h2>Lifecycle Methods Demo</h2>
            <p>Favourite Color: {favouriteColor}</p>
            <button onClick={changeColor}>Change to Yellow</button>
            <p>Button clicked {count} times</p>


            <hr/>

            <h3>Unmounting Phase Demo</h3>
            {showChild && <Child/>}
            <button onClick={toggleChild} style={{ marginTop: '10px'}}>
                {showChild ? 'Delete Child Component' : 'Show Child Component'}
            </button>
        </div>     
    );
};

export default LifecycleDemo;
