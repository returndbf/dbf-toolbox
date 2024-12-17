// ThemeContext.js
import { createContext, useState } from 'react';
const initColor = 'orange'
export const ThemeContext = createContext({ themeColor:initColor, toggleTheme:(themeColor:string)=>{} });

export const ThemeProvider = ({ children }:{children:any}) => {
    const [themeColor, setTheme] = useState(initColor);

    const toggleTheme = (themeColor:string) => {
        setTheme(themeColor);
    };

    return (
        <ThemeContext.Provider value={{ themeColor, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;