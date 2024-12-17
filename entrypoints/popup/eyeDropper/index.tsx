import React, {useState} from 'react';
import "./index.css"
import {ThemeContext} from "@/context/theme.tsx";

const Index = () => {
    const {themeColor} = useContext(ThemeContext);
    const [curColor, setCurColor] = useState(themeColor);
    const open = () => {
        // @ts-ignore
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then((result: { sRGBHex: string }) => {
                setCurColor(result.sRGBHex);
            })
            .catch(async (e: any) => {

            });
    }
    const copyColor = ()=>{
        navigator.clipboard.writeText(curColor)
    }
    return (
        <>
            <div className={'eyeDropper-container'}>
                <button onClick={open} style={{backgroundColor: themeColor}}>打开拾色器</button>
                <div className={'color-result'} style={{backgroundColor: curColor}} onClick={copyColor}>
                    <span className={'color-text'} style={{
                        transition: ' opacity 0.5s ease-in',
                    }}> {curColor}</span>
                </div>
            </div>
        </>
    );
};

export default Index;