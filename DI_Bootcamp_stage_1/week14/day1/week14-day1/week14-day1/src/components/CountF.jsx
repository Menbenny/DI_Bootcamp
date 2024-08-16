// import { log } from "console";
import { useState } from "react";

const CountF = (props) => {
  // const [state, setState] = useState()
  const [count, setCount] = useState(5);

  const add = () => {
    setCount((count) => count + 1);
    // console.log(count);
  };

  const minus = () => {
    setCount((count) => count - 1);
  };

  return (
    <>
      <h2> Count</h2>
      <button onClick={() => add()}> + </button>
      {count}
      <button> - </button>
    </>
  );
};
export default CountF;
