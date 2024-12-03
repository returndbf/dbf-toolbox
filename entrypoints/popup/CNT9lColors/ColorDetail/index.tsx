import React from 'react';
import "./index.css"
import {findColorDetail} from "@/constant/COLOR.ts"
import { useSearchParams } from 'react-router-dom';
import {ThemeContext} from "@/context/theme.tsx";
const Index = () => {
    const [curSelectedColor, setCurSelectedColor] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    const currentColorName = searchParams.get("name")!
    const { themeColor, toggleTheme } = useContext(ThemeContext);
    const colorClick = (color:string)=>{
        navigator.clipboard.writeText(color)
        toggleTheme(color);
    }
    return (
            <div className={'detail-root'}>
                <div className={'detail-grid'}>
                    {findColorDetail(currentColorName)?.detailColorMap.map(({color, name}) => {
                        return <div key={name} style={{ backgroundColor: color}}
                                    className={'color-detail'}
                                    onMouseEnter={() => setCurSelectedColor(name)}
                                    onMouseLeave={() => setCurSelectedColor('')}
                                    onClick={()=>colorClick(color)}
                        >
                <span style={{
                    transition: ' opacity 0.5s ease-in',
                    opacity: name === curSelectedColor ? 1 : 0,
                    color: '#5d3131',
                    lineHeight: '50px'
                }}> {name}</span>
                        </div>

                    })}
                </div>
            </div>

    );
};

export default Index;