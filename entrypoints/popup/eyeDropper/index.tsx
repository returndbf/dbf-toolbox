import React, {useState} from 'react';
import "./index.css"
import {ThemeContext} from "@/context/theme.tsx";

const Index = () => {
    const [curColor, setCurColor] = useState('');
    const {themeColor} = useContext(ThemeContext);
    const open = () => {
        // @ts-ignore
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then((result: { sRGBHex: string }) => {
                console.log(result);
                setCurColor(result.sRGBHex);
            })
            .catch(async (e: any) => {

            });
    }
    return (
        <>
            <div className={'eyeDropper-container'}>
                <button onClick={open} style={{backgroundColor: themeColor}}>打开拾色器</button>
                <div style={{width: 30, height: 30, backgroundColor: curColor}}></div>
            </div>
        </>
    );
};

export default Index;