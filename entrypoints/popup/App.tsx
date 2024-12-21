import './App.css';
import ThemeProvider, {ThemeContext} from "@/context/theme.tsx";
import React from "react";

import {RouterProvider} from "react-router-dom";
import router from "@/router";


function App() {

    return (
        <>
            <ThemeProvider>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

export default App;
