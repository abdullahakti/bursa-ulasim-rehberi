import React, { useState } from 'react'

const ThemeContext = createContext()

function ThemeContextProvider({children})
{
    const [themeName, setThemeName] = useState("light")

    return <ThemeContext.Provider value={{themeName}}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeContextProvider, ThemeContext }