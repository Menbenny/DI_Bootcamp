import { userContext } from 'react';
import { AppContext } from './App';

const Counter = ({title }) => {
    return (
        <div>
            <button onClick={() => setCount((count) => count + 1)}> + </button>
            <h2>
                {title}: {count}
            </h2>
            <button onClick={() => setCount((count) => count - 1)}> - </button>
        </div>
    )
}

export default Counter;