import { createContext } from "react";
import { colors } from "./ThemeColors";

export const ThemeContext = createContext({});

const ThemeProvider = (props: any) =>
{
  const isLightTheme = true;

  const theme =
  {
    colors: isLightTheme ? colors.light : colors.dark
  }

  return (
    <ThemeContext.Provider value = {theme}></ThemeContext.Provider>
  )
}