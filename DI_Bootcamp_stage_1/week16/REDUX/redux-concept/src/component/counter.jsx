import { useSelector } from "react-redux";

const Counter = (props) => {
    return (
        <>
        <h2>The Redux Counter</h2>
        <button>  +  </button>
        count 0: <button>  -  </button>
        </>
    )
}

export default Counter;