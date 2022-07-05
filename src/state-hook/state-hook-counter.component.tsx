import { useState } from "react";

const StateHookCounter = () => {
  const [counter, setCounter] = useState(0);
  const incrementFn = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {counter}
      <br />
      <button onClick={incrementFn}>Increment</button>
    </div>
  );
};

export default StateHookCounter;
