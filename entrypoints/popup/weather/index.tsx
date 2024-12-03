import React, {LegacyRef} from 'react';

import request from "@/api/request.ts";
import {message} from 'antd';

import 'qweather-icons/font/qweather-icons.css'
import "./index.css"
import rainbowFlower from "@/assets/flowerIcon/rainbow-flower.svg"
import WeatherContainer from "@/entrypoints/popup/weather/WeatherContainer.tsx";

export interface LocationData {
    "code": string,
    "location": Array<{
        "name": string,
        "id": string,
        "adm2": string,
        "adm1": string,
        "country": string,
        "tz": string,
    }>,
}

interface WeatherRes {
    "code": string,
    "updateTime"?: string,
}

interface WeatherData extends WeatherRes {
    "now": {
        "obsTime": "2024-11-16T19:32+08:00",
        "temp": "7",
        "feelsLike": "5",
        "icon": "150",
        "text": "晴",
        "wind360": "315",
        "windDir": "西北风",
        "windScale": "1",
        "windSpeed": "4",
        "humidity": "41",
        "precip": "0.0",
        "pressure": "1022",
        "vis": "18",
        "cloud": "91",
        "dew": "-7"
    },
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

interface DailyWeatherDataRes extends WeatherRes {
    "daily": DailyWeatherData[]

}

const Index = () => {
    const key = '0394034be5e54054bf95007e205ed377'
    const [messageApi] = message.useMessage();

    const [position, setPosition] = useState({
        longitude: 0,//经度
        latitude: 0,//纬度
    });

    const [fullPosition, setFullPosition] = useState<LocationData>()
    const [currentShowDaily, setCurrentShowDaily] = useState<"1" | "3">("1")
    const [weatherData, setWeatherData] = useState<DailyWeatherData>();
    const [isThree, setIsThree] = useState(false)
    const [threeDaysWeather, setThreeDaysWeather] = useState<DailyWeatherDataRes['daily']>();


    const onRequestLocationData = async (longitude: number, latitude: number) => {
        const res = await request<LocationData>(`https://geoapi.qweather.com/v2/city/lookup`, 'GET', {
            key,
            location: `${longitude},${latitude}`,
        })
        setFullPosition(res)
        return Promise.resolve(res)
    }

    const onRequestWeather = async (location: string) => {
        const threeDaysDataRes = await request<DailyWeatherDataRes>('https://devapi.qweather.com/v7/weather/3d', 'GET', {
            key,
            location
        })
        if (threeDaysDataRes.code === '200') {
            console.log(threeDaysDataRes, "threeDaysData")
            setThreeDaysWeather(threeDaysDataRes.daily)
            setWeatherData(threeDaysDataRes.daily[0])
        }

    }
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position, 'position')
            const {longitude, latitude} = position.coords;

            setPosition({...position, longitude: position.coords.longitude, latitude: position.coords.latitude})

            onRequestLocationData(longitude, latitude).then(locationData => {
                if (locationData.location) {
                    onRequestWeather(locationData.location?.[0]?.id);
                }

            });
        }, function (error) {
            // console.error('Error Code = ' + error.code + ' - ' + error.message);
            messageApi.error('获取地理位置失败')
            console.log(error)
        });
    }, [])
    const changeImg = ()=>{

        if(currentShowDaily === "1"){
            setIsThree(true)
            setTimeout(()=>{
                setCurrentShowDaily('3')
            },450)
        }else{
            setIsThree(false)
            setTimeout(()=>{
                setCurrentShowDaily('1')
            },500)
        }




    }
    return (
        <div className={'weather-container'}>
            <div className={'switch-img'} onClick={changeImg}>
                    <img className={[isThree ? 'scrolled2three-img':'scrolled2one-img',currentShowDaily === '3'?'threeDay-img':'oneDay-img'].join(' ')} style={{  width: '20px'}} src={rainbowFlower}  alt={''}/>
            </div>
            {
              isThree?<>
                  {
                      threeDaysWeather?.map(weatherData => {
                          return <WeatherContainer weatherData={weatherData} fullPosition={fullPosition!}/>
                      })
                  }
              </>:<WeatherContainer weatherData={weatherData!} fullPosition={fullPosition!}/>
            }


        </div>
    );
};

export default Index;