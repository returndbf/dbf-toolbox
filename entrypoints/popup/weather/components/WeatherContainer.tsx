import React from 'react';
import type {DailyWeatherData,LocationData} from "../index.tsx"
const WeatherContainer = ({weatherData,fullPosition}:{weatherData:DailyWeatherData,fullPosition:LocationData[]}) => {
    return (

            <div className={'weather-cards'}>
                {/*<div>预报日期:{weatherData?.fxDate}</div>*/}
                <div>所在位置:{`${fullPosition?.[0]?.adm1} - ${fullPosition?.[0]?.adm2} -${fullPosition?.[0]?.name}`}</div>
                <div>温度区间:{weatherData?.tempMin}-{weatherData?.tempMax}
                    <span>{weatherData?.textDay}<i className={`qi-${weatherData?.iconDay}`}></i></span>
                </div>

                <div>日出时间:{weatherData?.sunrise}</div>
                <div>日落时间:{weatherData?.sunset}</div>
                <div>月相:{weatherData?.moonPhase}<i className={`qi-${weatherData?.moonPhaseIcon}`}></i></div>

                <div>紫外线强度:{weatherData?.uvIndex}</div>
            </div>

    );
};

export default WeatherContainer;