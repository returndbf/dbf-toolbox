import React from "react";
import "./Button.css"

interface ButtonProps{
    onClick:()=>void;
    backgroundColor:string;
    style?:React.CSSProperties
}
const Button =({onClick,backgroundColor,style}:ButtonProps)=>{
    return(
        <>
        <button onClick={onClick} style={{backgroundColor: backgroundColor,...style}}>打开拾色器</button>
        </>
    )
}
export default Button