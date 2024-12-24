import React from 'react';

import request from "@/api/request.ts";


import 'qweather-icons/font/qweather-icons.css'
import "./index.css"
import rainbowFlower from "@/assets/flowerIcon/rainbow-flower.svg"
import WeatherContainer from "@/entrypoints/popup/weather/components/WeatherContainer.tsx";
import Accordion from "@/entrypoints/popup/weather/components/Accordion.tsx";
import Modal from "@/entrypoints/components/Modal/Modal.tsx"

export interface LocationData {
    "name": string,
    "id": string,
    "adm2": string,
    "adm1": string,
    "country": string,
    "tz": string,
}

interface LocationDataRes {
    "code": string,
    location: LocationData[]

}

export interface DailyWeatherData {
    "fxDate": string,
    "sunrise": string
    "sunset": string,
    "moonrise": string,
    "moonset": string,
    "moonPhase": string,
    "moonPhaseIcon": string,
    "tempMax": string,
    "tempMin": string,
    "iconDay": string,
    "textDay": string,
    "iconNight": string,
    "textNight": string,
    "wind360Day": string,
    "windDirDay": string,
    "windScaleDay": string,
    "windSpeedDay": string,
    "wind360Night": string,
    "windDirNight": string,
    "windScaleNight": string,
    "windSpeedNight": string,
    "humidity": string,
    "precip": string,
    "pressure": string,
    "vis": string,
    "cloud": string,
    "uvIndex": string
}

interface WeatherRes {
    "code": string,
    "updateTime"?: string,
    "daily": DailyWeatherData[]
}

interface fullWeatherData {
    weatherData: WeatherRes,
    position: LocationDataRes
}
interface IpDataRes {
    "ret": "ok" | string,
    "data": {
        "ip": string,
        "location": string[]
    }
}

const Index = () => {

    const [position, setPosition] = useState({
        longitude: 0,//经度
        latitude: 0,//纬度
    });

    const [fullPosition, setFullPosition] = useState<LocationData[]>()
    const [currentShowDaily, setCurrentShowDaily] = useState<"1" | "3">("1")
    const [weatherData, setWeatherData] = useState<DailyWeatherData>();
    const [isThree, setIsThree] = useState(false)
    const [threeDaysWeather, setThreeDaysWeather] = useState<WeatherRes['daily']>();
    const [isShowCustomModal, setIsShowCustomModal] = useState(false)
    const [allScroll, setAllowScroll] = useState(true)
    const onRequsetIp = async () => {
        return request<IpDataRes>('https://myip.ipip.net/json', 'GET')
    }

    const onRequestWeather = async (location:string,adm:string) => {
        const threeDaysDataRes = await request<fullWeatherData>(`${import.meta.env.VITE_BACKEND_URL}/reqWeather`, 'GET', {
            location,
            adm
        })
        const { weatherData, position } = threeDaysDataRes
        if (weatherData.code === '200') {
            setThreeDaysWeather(weatherData.daily)
            setWeatherData(weatherData.daily[0])
            setFullPosition(position.location)
        }

    }

    // const onRequestWeather = async (longitude: number, latitude: number) => {
    //     const threeDaysDataRes = await request<fullWeatherData>(`${import.meta.env.VITE_BACKEND_URL}/reqWeather`, 'GET', {
    //         location: `${longitude},${latitude}`,
    //     })
    //     const { weatherData, position } = threeDaysDataRes
    //     if (weatherData.code === '200') {
    //         setThreeDaysWeather(weatherData.daily)
    //         setWeatherData(weatherData.daily[0])
    //         setFullPosition(position.location)
    //     }

    // }
    useEffect(() => {
        // navigator.geolocation.getCurrentPosition(function (position) {
        //     const { longitude, latitude } = position.coords;
        //     setPosition({ ...position, longitude: position.coords.longitude, latitude: position.coords.latitude })
        //     onRequestWeather(longitude, latitude)
        // }, function (error) {

        //     console.log(error)
        // }, {
        //     enableHighAccuracy: true, // 提高精度
        //     timeout: 10000,          // 超时时间
        //     maximumAge: 0            // 禁用缓存
        // });
        onRequsetIp().then(ipData=>{
            const [country,adm,location] = ipData?.data?.location
            onRequestWeather(location,adm)
        })
    }, [])
    const changeImg = () => {

        if (currentShowDaily === "1") {
            setIsThree(true)
            setTimeout(() => {
                setCurrentShowDaily('3')
            }, 460)
        } else {
            setIsThree(false)
            setTimeout(() => {
                setCurrentShowDaily('1')
            }, 460)
        }


    }
    return (
        <div className={'weather-container'}>
            <div className={''}>
                <img
                    className={[isThree ? 'scrolled2three-img' : 'scrolled2one-img', currentShowDaily === '3' ? 'threeDay-img' : 'oneDay-img', "switch-img"].join(' ')}
                    style={{ width: '20px' }} src={rainbowFlower} alt={''} onClick={changeImg} />
            </div>
            <Modal open={isShowCustomModal} title='自定义城市' onClose={() => setIsShowCustomModal(false)}
                onConfirm={() => setIsShowCustomModal(false)}>
                <input className='custom-city-input' type='text' placeholder='请输入城市名' onChange={() => {
                }}></input>
            </Modal>
            {
                isThree ? <>
                    {
                        threeDaysWeather?.map(weatherData => {
                            return <>
                                <Accordion title={weatherData.fxDate}>
                                    <WeatherContainer weatherData={weatherData} fullPosition={fullPosition!} />
                                </Accordion>
                            </>

                        })
                    }
                </> : <>
                    <Accordion title={weatherData!?.fxDate}> <WeatherContainer weatherData={weatherData!}
                        fullPosition={fullPosition!} /></Accordion>

                </>
            }


        </div>
    );
};

export default Index;