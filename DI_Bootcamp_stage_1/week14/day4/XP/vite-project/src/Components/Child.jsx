import React, { useEffect } from 'react';


const Child = () => {
    useEffect(()=> {
        console.log('Child component mounted');
         return () => {
            alert('Component is being unmounted!')
            console.log('Child component unmounted');
         };
    }, []);

    return (
        <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginTop: '20px'}}>
            <h3>Hello World!</h3>
        </div>
    );
};

export default Child;