import React, {useState} from 'react';
import {Button, message} from "antd";

const Index = () => {
    const [curColor, setCurColor] = useState('');
    const open = () => {
        // @ts-ignore
        const eyeDropper = new EyeDropper();
        eyeDropper
            .open()
            .then((result: {sRGBHex :string}) => {
                console.log(result);
                setCurColor(result.sRGBHex);
            })
            .catch(async (e:any) => {
               await message.error('使用取色器失败');
            });
    }
    return (
        <>
            <div style={{display: 'flex',justifyContent: 'space-between',alignItems: 'center'}}>
            <Button  onClick={open} type="primary">打开拾色器</Button>
            <div style={{width:30,height:30,backgroundColor:curColor}}></div>
            </div>
        </>
    );
};

export default Index;