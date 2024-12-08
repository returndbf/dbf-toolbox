import React from 'react';
import {ConfigProvider} from "antd";

import router from "@/router";
import {ThemeContext} from "@/context/theme.tsx";

import {RouterProvider} from "react-router-dom";

const AntdProvider = () => {
    const { themeColor } = useContext(ThemeContext);
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: themeColor,
                    borderRadius: 20,
                },
            }}
        >
            <RouterProvider router={router}/>

        </ConfigProvider>
    );
};

export default AntdProvider;