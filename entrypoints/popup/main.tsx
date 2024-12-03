import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './style.css';
import {ConfigProvider} from "antd";
import {RouterProvider} from "react-router";
import router from "@/router"

// const { theme } = useContext(ThemeContext);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
           <App></App>
    </React.StrictMode>,
)
;
