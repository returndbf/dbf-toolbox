import React from 'react';
import searchFlower from "@/assets/flowerIcon/search-flower.svg"
import sunFlower from "@/assets/flowerIcon/sun-flower.svg"
import common from "@/assets/translate/common.svg"
import cry from "@/assets/translate/cry.svg"
import request from "@/api/request.ts";
import "./index.css"
import { ThemeContext } from "@/context/theme.tsx";

interface TranslateResult {
    from: "zh"
    tgt_text: string
    to: "en"
}

const Index = () => {
    const [currentInPutLanguage, setCurrentInPutLanguage] = useState<'en' | 'zh'>('zh')
    const { themeColor, toggleTheme } = useContext(ThemeContext);
    const [translateParams, setTranslateParams] = useState({
        from: 'zh',
        to: 'en',
        src_text: ''
    })

    const containerKeyDown = (event: { key: string,ctrlKey:boolean })=>{
        if(event.ctrlKey && event.key === 'q'){
            changeLanguage()
        }
    }

    const languageMap = { 'en': 'input here', 'zh': '在此输入' }
    const [translateRes, setTranslateRes] = useState('')
    const changeLanguage = () => {
        setCurrentInPutLanguage(currentInPutLanguage === 'en' ? 'zh' : 'en')
        setTranslateParams((prevParams) => ({
            ...prevParams,
            from: prevParams.from === 'en' ? 'zh' : 'en',
            to: prevParams.to === 'zh' ? 'en' : 'zh',
            src_text: ''
        }));


    }
    const onTranslate = async () => {
        if (!translateParams.src_text.trim()) return
        const res = await request<TranslateResult>(`${import.meta.env.VITE_BACKEND_URL}/reqTranslate`, 'GET', translateParams)
        setTranslateRes(res.tgt_text)
    }
    const onCopyResult = () => {
        navigator.clipboard.writeText(translateRes)
    }
    const handleKeyDown = (event: { key: string }) => {
        if (event.key === "Enter") {
            onTranslate()
        }
    };


    return (

        <div className={'container'}  onKeyDown={containerKeyDown}  tabIndex={0 }>
            <div className={'box'}>
                <div className={'search-block'}>
                    <input className={'translate-input'}
                        autoFocus
                        style={{ border: `2px solid ${themeColor} ` }}
                        placeholder={languageMap[currentInPutLanguage]}
                        onChange={(e) => setTranslateParams({ ...translateParams, src_text: e.target.value })}
                        value={translateParams.src_text}
                        onKeyDown={handleKeyDown}
                    />
                    <div className={'icon-container'} onClick={() => onTranslate()}>
                        <img src={searchFlower} className={'search-icon'} />
                    </div>

                </div>

                <div className={'arrow'}
                    onClick={changeLanguage}>
                    <img className={'translate-icon'} src={currentInPutLanguage === 'zh' ? common : cry} />
                </div>
                <div className={'result-block'}>
                    <input className={'result-input'} value={translateRes} disabled
                        style={{ border: `2px solid ${themeColor} ` }}></input>
                    <div className={'icon-container'} onClick={() => onCopyResult()}>
                        <img src={sunFlower} className={'copy-icon'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;