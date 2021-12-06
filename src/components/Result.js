import React from 'react';
import '@styles/Result.css';
import PropTypes from 'prop-types';
import Current from '@components/Current';
import Hourly from '@components/Hourly';
import Daily from '@components/Daily';

Result.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

function timeConvert(unix_timestamp, timezone){
    console.log(unix_timestamp);
    console.log(timezone);
    let date = new Date(unix_timestamp * 1000);
    console.log(date);
    console.log(date.toLocaleString('en-GB', {timeZone: timezone, weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric',  hour: '2-digit', minute: '2-digit'}));
    return {
        date: date.toLocaleString('en-GB', {timeZone: timezone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}),
        time: date.toLocaleString('en-GB', {timeZone: timezone, hour: '2-digit', minute: '2-digit'})
    };
}
function weatherIconHandler(id, dayTime, componentName){
    console.log(componentName);
    if(id === 800){
        return dayTime.includes('d') ? <i className={'wi wi-day-sunny weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-clear weather-icon' + ' ' + componentName}/>;
    }
    if(id >= 801 && 804 >= id){
        if(id === 801){
            return dayTime.includes('d') ? <i className={'wi wi-day-sunny-overcast weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-partly-cloudy weather-icon' + ' ' + componentName}/>;
        }
        if (id === 803){
            return <i className={'wi wi-cloud weather-icon' + ' ' + componentName}/>;
        }
        if (id === 804){
            return <i className={'wi wi-cloudy weather-icon' + ' ' + componentName}/>;
        }
        return dayTime.includes('d') ? <i className={'wi wi-day-cloudy weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-cloudy weather-icon' + ' ' + componentName}/>;
    }
    if(id >= 300 && 531 >= id){
        if(id === 301 || id === 321 || id === 501 || id === 521 || id === 531){
            return <i className={'wi wi-showers weather-icon' + ' ' + componentName}/>;
        }
        if(id === 302 || id === 502 || id === 503 || id === 504 || id === 522){
            return <i className={'wi wi-rain weather-icon' + ' ' + componentName}/>;
        }
        if (id === 511){
            return <i className={'wi wi-snowflake-cold weather-icon' + ' ' + componentName}/>;
        }
        if (id === 310 || id === 311 || id === 313){
            return <i className={'wi wi-sleet weather-icon' + ' ' + componentName}/>;
        }
        if(id === 312 || id === 314){
            return <i className={'wi wi-rain-mix weather-icon' + ' ' + componentName}/>;
        }
        return dayTime.includes('d') ? <i className={'wi wi-day-showers weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-showers weather-icon' + ' ' + componentName}/>;
    }
    if(id >= 200 && 232 >= id){
        if (id === 200 || id === 230) {
            return dayTime.includes('d') ? <i className={'wi wi-day-storm-showers weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-storm-showers weather-icon' + ' ' + componentName}/>;
        }
        if (id === 201 || id === 231) {
            return <i className={'wi wi-storm-showers weather-icon' + ' ' + componentName}/>;
        }
        if (id === 202 || id === 232){
            return <i className={'wi wi-thunderstorm weather-icon' + ' ' + componentName}/>;
        }
        return dayTime.includes('d') ? <i className={'wi wi-day-lightning weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-lightning weather-icon' + ' ' + componentName}/>;
    }
    if(id >= 600 && 622 >= id){
        if (id === 602){
            return <i className={'wi wi-snow weather-icon' + ' ' + componentName}/>;
        }
        if (id === 611 || id === 616 || id === 621){
            return <i className={'wi wi-sleet weather-icon' + ' ' + componentName}/>;
        }
        if (id === 612 || id === 615 || id === 620){
            return dayTime.includes('d') ? <i className={'wi wi-day-sleet weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-sleet weather-icon' + ' ' + componentName}/>;
        }
        if (id === 613 || id === 622){
            return <i className={'wi wi-rain-mix weather-icon' + ' ' + componentName}/>;
        }
        return dayTime.includes('d') ? <i className={'wi wi-day-snow weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-alt-snow weather-icon' + ' ' + componentName}/>;
    }
    if(id >= 701 && 781 >= id){
        if(id === 731){
            return <i className={'wi wi-sandstorm weather-icon' + ' ' + componentName}/>;
        }
        if (id === 761 || id === 751){
            return <i className={'wi wi-dust weather-icon' + ' ' + componentName}/>;
        }
        if (id === 701 || id === 741){
            return <i className={'wi wi-fog weather-icon' + ' ' + componentName}/>;
        }
        if (id === 711){
            return <i className={'wi wi-smoke weather-icon' + ' ' + componentName}/>;
        }
        if (id === 762){
            return <i className={'wi wi-volcano weather-icon' + ' ' + componentName}/>;
        }
        if (id === 771){
            return <i className={'wi wi-strong-wind weather-icon' + ' ' + componentName}/>;
        }
        if (id === 781){
            return <i className={'wi wi-tornado weather-icon' + ' ' + componentName}/>;
        }
        return dayTime.includes('d') ? <i className={'wi wi-day-fog weather-icon' + ' ' + componentName}/> : <i className={'wi wi-night-fog weather-icon' + ' ' + componentName}/>;
    }
}


function Result({ resultData, resultCityInfo }){
    console.log(resultCityInfo);
    console.log(resultData);
    console.log(JSON.stringify(resultData, null, '\t'));

    return resultData.current ? <Current resultData={resultData} resultCityInfo={resultCityInfo} timeConvert = {timeConvert} weatherIconHandler={weatherIconHandler}/>
            : resultData.hourly ? <Hourly resultData={resultData} resultCityInfo={resultCityInfo} timeConvert = {timeConvert} weatherIconHandler={weatherIconHandler}/>
            : <Daily resultData={resultData} resultCityInfo={resultCityInfo} timeConvert = {timeConvert} weatherIconHandler={weatherIconHandler}/>;
}



export default Result;