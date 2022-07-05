import { useReducer } from "react";

const ReducerHook = () => {
  const reducerFn = (state: any, action: string) => {
    switch (action) {
      case "INCREMENT":
        return { count: state.count + 1, showText: state.showText };

      case "showTextToggle":
        return { count: state.count, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducerFn, { count: 0, showText: true });

  return (
    <div>
      {state.count}
      <button
        onClick={() => {
          dispatch("INCREMENT");
          dispatch("showTextToggle");
        }}
      >
        Increment
      </button>
      {state.showText ? <p>This is showText</p> : ""}
    </div>
  );
};

export default ReducerHook;
