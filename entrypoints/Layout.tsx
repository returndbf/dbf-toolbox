import React, {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import back from "@/assets/back.svg"
import {Button, Divider, Image} from "antd";

const Layout = ({children, title, icon}: { children: any, title: string, icon: string }) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return <div>
        <header>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{cursor: 'pointer'}} onClick={() => navigate(-1)}>
                    <img src={back} style={{height: '30px', width: '30px'}}></img>
                </div>
                <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)',display:'flex',alignItems:'center'}}>{title}
                    <img src={icon} style={{height: '20px', width: '20px',marginLeft:'5px'}}/>
                </div>
            </div>
            <Divider style={{margin: 0, padding: 0}}/>
        </header>
        <main style={{height: document.body.clientHeight, width: document.body.offsetWidth}}>{children}</main>
    </div>
};

export default Layout;