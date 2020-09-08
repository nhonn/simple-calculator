import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ThemeContext, themes } from "contexts/themeContext";
import { DataContext, initialState } from "contexts/dataContext";
import reducer from "reducers/dataReducer";
import Main from "screens/Main";

export default () => {
  const [theme, setTheme] = React.useState(true);
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const changeTheme = async () => {
    const val = !theme;
    setTheme(val);
    await AsyncStorage.setItem("@theme", JSON.stringify(val));
  };

  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem("@theme");
      if (value !== null) setTheme(JSON.parse(value));
      else {
        setTheme(true);
        await AsyncStorage.setItem("@theme", JSON.stringify(true));
      }
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    getTheme();
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme ? themes.light : themes.dark,
        toggleTheme: () => changeTheme(),
      }}
    >
      <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Main />
      </DataContext.Provider>
    </ThemeContext.Provider>
  );
};
