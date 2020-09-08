import React from "react";

const initialState = {
  calculation: "",
  result: "0",
  ans: "0",
  isNew: true,
};

const DataContext = React.createContext();

export { DataContext, initialState };
