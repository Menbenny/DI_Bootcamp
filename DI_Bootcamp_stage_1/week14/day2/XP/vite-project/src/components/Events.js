import React, { useState } from 'react'

function Events() {
    // const clickMe = () => {
    //     alert('I was clicked')
    // }

    // return (
    //     <button onClick={clickMe}>Click Me</button>
    // )

    const [inputValue, setInputValue ] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert(`'You entered:' ${inputValue}`)
        }
    };

    return (
        <div>
            <button onClick={() => alert('I was clicked')}>Click here</button>
            <input
            type="text"
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    )
}

export default Events;