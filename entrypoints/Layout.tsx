import React, {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';
import back from "@/assets/back.svg"
import Divider from "@/entrypoints/components/Divider.tsx";
import {ThemeContext} from "@/context/theme.tsx";


const Layout = ({children, title, icon}: { children: any, title: string, icon: string }) => {
    const {themeColor, toggleTheme} = useContext(ThemeContext);
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
                <div style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)',display:'flex',alignItems:'center',fontWeight:'bold'}}>{title}
                    <img src={icon} style={{height: '20px', width: '20px',marginLeft:'5px'}}/>
                </div>
            </div>
            <Divider bgColor={themeColor}/>
        </header>
        <main style={{height: document.body.clientHeight, width: document.body.offsetWidth}}>{children}</main>
    </div>
};

export default Layout;