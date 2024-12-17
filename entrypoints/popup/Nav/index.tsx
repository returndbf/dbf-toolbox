import React, {CSSProperties} from 'react';

import {useNavigate} from "react-router";
import "./index.css"
import {TOOL_MAP} from "@/constant/TOOL_MAP.tsx";
import {ThemeContext} from "@/context/theme.tsx";
import Divider from "@/entrypoints/components/Divider.tsx";

const Index = () => {
    const navigate = useNavigate();
    const [currentSelectedMenu, setCurrentSelectedMenu] = useState('')
    const [isHovered, setHovered] = useState(false)
    const {themeColor, toggleTheme} = useContext(ThemeContext);
    const localColor = localStorage.getItem("curSelectedColor")

    useEffect(()=>{
        const root = document.documentElement; // 获取<html>元素
        const curColor = getComputedStyle(root).getPropertyValue('--cur-color');

        !localColor &&  localStorage.setItem('curSelectedColor','orange')
        const color = localColor|| curColor

        document.documentElement.style.setProperty('--cur-color', color );
        toggleTheme(color);
    },[localColor])
    return (
        <div>
            {
                TOOL_MAP.filter(({path}) => path !== '/ColorDetail').map(({name, path, icon}, index) => {
                    return <div key={name}>
                        <div style={{width: '100%', height: '50px'}} className={['nav-card',].join(' ')}
                             onClick={() => navigate(path)}
                             onMouseEnter={() => setCurrentSelectedMenu(name)}
                        >
                            <div>{name}</div>
                            <img src={icon}
                                 className={[currentSelectedMenu === name ? 'img-scroll' : '', 'title-icon'].join(" ")}/>
                        </div>

                        {/*<Divider style={{margin: 0, padding: 0}}/>*/}
                        <Divider bgColor={themeColor}/>
                    </div>
                })
            }
            <div style={{

                opacity: isHovered ? '0.1' : '0',
                color: themeColor,
            }}
                 className={'nav-footer'}
                 onMouseEnter={() => setHovered(true)}
                 onMouseLeave={() => setHovered(false)}
            > 广告位不招商
            </div>


        </div>
    );
};

export default Index;