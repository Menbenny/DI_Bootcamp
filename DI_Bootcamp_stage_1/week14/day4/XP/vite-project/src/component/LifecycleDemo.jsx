import React from "react";
import { useState, useEffect, useRef } from 'react';

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
}