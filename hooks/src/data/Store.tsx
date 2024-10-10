import React, { useState } from "react";

const initialState = {
  number: 1234,
  text: "ContextAPI + Hooks",
  setNumber: (x: any) => {},
  setText: (x: any) => {},
};

export const AppContext = React.createContext(initialState);

const Store = (props: any) => {
  const [state, setState] = useState(initialState);
  const updateState = (key: any, value: any) => {
    setState({
      ...state,
      [key]: value,
    });
  };
  return (
    <AppContext.Provider
      value={{
        number: state.number,
        text: state.text,
        setNumber: (n) => updateState("number", n),
        setText: (t) => updateState("text", t),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
