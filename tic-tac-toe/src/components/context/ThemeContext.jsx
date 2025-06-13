import { createContext } from "react";
import {useState} from 'react';



 export const ThemeContext = createContext({})

export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        
        //meaning?
        setTheme(theme  === 'light' ? 'dark' : 'light')
    }
   
    return(
        //why a comma in between?
        <ThemeContext.Provider value={{theme, toggleTheme}}>
{children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext