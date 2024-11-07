import { createContext } from "react"
const theme={
    dark:{foreground: '#ffffff',
    background: '#222222',},
    light: {
        foreground: '#000000',
        background: '#eeeeee',
      },

}
const themeContext=createContext(theme.dark)
export default themeContext