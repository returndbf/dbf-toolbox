import './App.css';
import ThemeProvider, {ThemeContext} from "@/context/theme.tsx";
import "./App.css"
import React from "react";
import AntdProvider from "@/entrypoints/popup/AntdProvider.tsx";
import Nav from "@/entrypoints/popup/Nav";
import {RouterProvider} from "react-router-dom";
import router from "@/router";
import {ConfigProvider} from "antd";

function App() {
    const { themeColor } = useContext(ThemeContext);
    return (
        <>
            <ThemeProvider>
    <AntdProvider />
            </ThemeProvider>
        </>
    )
}

export default App;
