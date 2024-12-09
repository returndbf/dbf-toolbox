import React from 'react';


import router from "@/router";
import {ThemeContext} from "@/context/theme.tsx";

import {RouterProvider} from "react-router-dom";

const AntdProvider = () => {
    const { themeColor } = useContext(ThemeContext);
    return (
            <RouterProvider router={router}/>

    );
};

export default AntdProvider;