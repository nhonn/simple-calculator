import React from "react";

const themes = {
  light: {
    foreground: "#264653",
    background: "#f1faee",
    func: "#f4a261",
    normal: "#f1faee",
    equal: "#e76f51",
    operator: "#e9c46a",
    cover: "#2a9d8f",
  },
  dark: {
    foreground: "#f1faee",
    background: "#264653",
    func: "#e63946",
    normal: "#264653",
    equal: "#34558b",
    operator: "#457b9d",
    cover: "#1d3557",
  },
};

const ThemeContext = React.createContext();

export { ThemeContext, themes };
