import { useState } from "react";

const StateHookInput = () => {
  const [input, setInput] = useState("");

  const changeListener = (event: any) => {
    setInput(event.target.value);
  };
  return (
    <div>
      <input onChange={changeListener} />
      {input}
    </div>
  );
};

export default StateHookInput;
