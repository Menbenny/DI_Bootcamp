import { userContext } from 'react';
import { AppContext } from './App';

const ShowCount = () => {
    const {count} = useContext(AppContext)
    return (
        <>
            count: 
        </>
    )
}

export default ShowCount;