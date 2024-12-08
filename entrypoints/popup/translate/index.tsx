import React from 'react';
import searchFlower from "@/assets/flowerIcon/search-flower.svg"
import sunFlower from "@/assets/flowerIcon/sun-flower.svg"
import redArrow from "@/assets/arrow/red-arrow.svg"
import blueArrow from "@/assets/arrow/blue-arrow.svg"
import request from "@/api/request.ts";
import "./index.css"

interface TranslateResult {
    from: "zh"
    tgt_text: string
    to: "en"
}

const Index = () => {
    const [currentInPutLanguage, setCurrentInPutLanguage] = useState<'en' | 'zh'>('zh')
    const [translateParams, setTranslateParams] = useState({
        from: 'zh',
        to: 'en',
        apikey: '9ebed8a0c3b6567dbfac85823f926c08',
        src_text: ''
    })

    const languageMap = {'en': 'input here', 'zh': '在此输入'}
    const [translateRes, setTranslateRes] = useState('')
    const changeLanguage = () => {
     setCurrentInPutLanguage(currentInPutLanguage ==='en' ? 'zh' : 'en' )
        setTranslateParams((prevParams) => ({
            ...prevParams,
            from: prevParams.from === 'en' ? 'zh' : 'en',
            to: prevParams.to === 'zh' ? 'en' : 'zh',
            src_text: ''
        }));



    }
    const onTranslate = async () => {
        if(!translateParams.src_text.trim()) return
        const res = await request<TranslateResult>('https://api.niutrans.com/NiuTransServer/translation', 'GET', translateParams)
        setTranslateRes(res.tgt_text)
    }
    const onCopyResult =  () => {
        navigator.clipboard.writeText(translateRes)
    }

    return (

        <div className={'container'}>
            <div className={'box'}>
                <div className={'search-block'}>
                    <input className={'translate-input'}
                           placeholder={languageMap[currentInPutLanguage]}
                           onChange={(e) => setTranslateParams({...translateParams, src_text: e.target.value})}
                           value={translateParams.src_text}/>
                    <div className={'icon-container'} onClick={()=>onTranslate()}>
                        <img src={searchFlower} className={'search-icon'} />
                    </div>

                </div>

                <div className={currentInPutLanguage === 'zh' ? 'arrow' : 'arrow-reverse'}
                     onClick={ changeLanguage}>
                    <img className={'arrow-icon'} src={blueArrow}/>
                    <img className={'arrow-icon'} src={redArrow}/>
                </div>
                <div className={'result-block'}>
                    <input className={'result-input'} value={translateRes} disabled></input>
                    <div className={'icon-container'} onClick={() => onCopyResult()}>
                        <img src={sunFlower} className={'copy-icon'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;