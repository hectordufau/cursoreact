import React from "react";

export const data = {
  number: 123,
  text: "Context API",
};

const setState: React.Dispatch<
  React.SetStateAction<{ number: number; text: string }>
> = () => {};

const DataContext = React.createContext({ state: data, setState });

export default DataContext;
