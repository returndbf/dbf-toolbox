import EyeDropper from "@/entrypoints/popup/eyeDropper";
import Translate from "@/entrypoints/popup/translate";
import Weather from "@/entrypoints/popup/weather";
import CNT9lColors from "@/entrypoints/popup/CNT9lColors";
import ColorDetail from "@/entrypoints/popup/CNT9lColors/ColorDetail";
import pinkFlower from "@/assets/flowerIcon/pink-flower.svg"
import purpleFlower from "@/assets/flowerIcon/purple-flower.svg"
import tulipFlower from "@/assets/flowerIcon/tulip-flower.svg"
import violaOdorataFlower from "@/assets/flowerIcon/viola-odorata-flower.svg"
import tomatoFlower from "@/assets/flowerIcon/tomato-flower.svg"

export const TOOL_MAP = [{
    name: '取色器',
    path: '/eyeDropper',
    element: <EyeDropper/>,
    icon: violaOdorataFlower
},
    {
        name: '中英翻译',
        path: '/translate',
        element: <Translate/>,
        icon: purpleFlower
    }, {
        name: '当前天气',
        path: '/weather',
        element: <Weather/>,
        icon: pinkFlower
    }, {
        name: '中国传统色彩',
        path: '/CNT9lColors',
        element: <CNT9lColors/>,
        icon: tulipFlower,
    },
    {
        name: '色彩列表',
        path: '/ColorDetail',
        element: <ColorDetail/>,
        icon: tomatoFlower,
    },


]