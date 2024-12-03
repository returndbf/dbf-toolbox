import EyeDropper from "@/entrypoints/popup/eyeDropper";
import Translate from "@/entrypoints/popup/translate";
import Weather from "@/entrypoints/popup/weather";
import CNT9lColors from "@/entrypoints/popup/CNT9lColors";
import ColorDetail from "@/entrypoints/popup/CNT9lColors/ColorDetail";

export const TOOL_MAP = [{
    name: '取色器',
    path: '/eyeDropper',
    element: <EyeDropper/>,
    icon: ''
},
    {
        name: '中英翻译',
        path: '/translate',
        element: <Translate/>,
        icon: ''
    }, {
        name: '当前天气',
        path: '/weather',
        element: <Weather/>,
        icon: ''
    }, {
        name: '中国传统色彩',
        path: '/CNT9lColors',
        element: <CNT9lColors/>,
        icon: '',
    },
    {
        name: '色彩列表',
        path: '/ColorDetail',
        element: <ColorDetail/>,
        icon: '',
    },


]