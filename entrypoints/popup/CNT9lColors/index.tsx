import React from 'react';

import "./index.css"
import {useNavigate} from "react-router";
import Divider from "@/entrypoints/components/Divider/Divider";
import {ThemeContext} from "@/context/theme.tsx";

const colorMap: Array<{ colorValue: string, name: string }> = [
    {colorValue: '#FFF799', name: '立春'},
    {colorValue: '#F9D3E3', name: '雨水'},
    {colorValue: '#BA5B49', name: '惊蛰'},
    {colorValue: '#EBEEE8', name: '春分'},
    {colorValue: '#A6559D', name: '清明'},
    {colorValue: '#DCC7E1', name: '谷雨'},
    {colorValue: '#C3D94E', name: '立夏'},
    {colorValue: '#E2A2AC', name: '小满'},
    {colorValue: '#D5D1AE', name: '芒种'},
    {colorValue: '#CB523E', name: '夏至'},
    {colorValue: '#F5B087', name: '小暑'},
    {colorValue: '#E3ADB9', name: '大暑'},
    {colorValue: '#88ABDA', name: '立秋'},
    {colorValue: '#F0CFE3', name: '处暑'},
    {colorValue: '#F5F2E9', name: '白露'},
    {colorValue: '#D5E3D4', name: '秋分'},
    {colorValue: '#A6BAB1', name: '寒露'},
    {colorValue: '#D12920', name: '霜降'},
    {colorValue: '#FFFBC7', name: '立冬'},
    {colorValue: '#DE82A7', name: '小雪'},
    {colorValue: '#EFC4CE', name: '大雪'},
    {colorValue: '#E7CAD3', name: '冬至'},
    {colorValue: '#F6F9E4', name: '小寒'},
    {colorValue: '#995D7F', name: '大寒'},
]



const Index = () => {
    const navigate = useNavigate()
    const {themeColor} = useContext(ThemeContext);
    return (
        <div className={'color-block-root'} style={{height:'100%'}}>
            {
                colorMap.map(({colorValue,name}, index) => {
                    return <div key={name}>
                        <div className={'color-block'}  onClick={()=>navigate(`/ColorDetail?name=${name}&colorValue=${colorValue}`)}>
                            <div className={'left-color'}
                                 style={{ backgroundColor: colorValue}}></div>
                            <div >{name}</div>
                        </div>
                        <Divider bgColor={themeColor}/>
                    </div>
                })
            }

        </div>
    );
};

export default Index;