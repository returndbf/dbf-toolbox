import React, {CSSProperties} from 'react';
import {Divider, Radio, Space} from "antd";
import {useNavigate} from "react-router";
import "./index.css"
import {TOOL_MAP} from "@/constant/TOOL_MAP.tsx";
import {SYSTEM_COLOR} from "@/constant/COLOR.ts"
import {ThemeContext} from "@/context/theme.tsx";

const Index = () => {
    const navigate = useNavigate();

    return (
        <div>
            {
                TOOL_MAP.filter(({path})=>path!=='/ColorDetail').map(({name, path}, index) => {
                    return <div key={name} >
                        <div style={{width: '100%', height: '50px'}} className={'nav-card'}
                             onClick={() => navigate(path)}>{name}</div>
                        <Divider style={{margin: 0, padding: 0}}/>
                    </div>
                })
            }

            {/*{*/}
            {/*    <Radio.Group onChange={(e)=>toggleTheme(e.target.value)} value={themeColor}>*/}
            {/*        {*/}
            {/*            SYSTEM_COLOR.map(({name, color}, index) => {*/}
            {/*                return <Radio.Button value={color} key={color}>{name}</Radio.Button>*/}
            {/*            })*/}
            {/*        }*/}

            {/*    </Radio.Group>*/}
            {/*}*/}

        </div>
    );
};

export default Index;