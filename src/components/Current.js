import React from 'react';
import '@styles/Current.css';
import '@styles/weather-icons.css';
import '@styles/weather-icons-wind.css';
import PropTypes from 'prop-types';
import {VisibilityRounded} from '@mui/icons-material';

Current.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    timeConvert: PropTypes.func,
    weatherIconHandler: PropTypes.func
};

function Current({resultData, resultCityInfo, timeConvert, weatherIconHandler}) {
    return (
            <div className='current-weather-wrap'>
                <div className='grid-item main'>
                    <div className='city-info'>{resultCityInfo.city}, {resultCityInfo.country}</div>
                    <div className='time'>{timeConvert(resultData.current.dt, resultData.timezone).time}</div>
                    {weatherIconHandler(resultData.current.weather[0].id, resultData.current.weather[0].icon, 'current')}
                    <div className='temperature'>{Math.round(resultData.current.temp)}<i className='wi wi-degrees current'/></div>
                    <div className='temperature-feeling'>Feels like {Math.round(resultData.current.feels_like)}<i className='wi wi-degrees current'/></div>
                </div>
                <div className='grid-item right-side sunrise'><i className='wi wi-sunrise current'/> {timeConvert(resultData.current.sunrise, resultData.timezone).time}</div>
                <div className='grid-item right-side sunset'><i className='wi wi-sunset current'/> {timeConvert(resultData.current.sunset, resultData.timezone).time}</div>
                <div className='grid-item right-side humidity'>{resultData.current.humidity} <i className='wi wi-humidity current'/></div>
                <div className='grid-item right-side wind'><i className='wi wi-strong-wind current'/> {resultData.current.wind_speed} m/s <i className='wi wi-wind towards-336-deg current'/></div>
                <div className='grid-item right-side pressure'><i className='wi wi-barometer current'/> {resultData.current.pressure} hPa</div>
                <div className='grid-item right-side visibility'><VisibilityRounded id='visibilityCurrent'/> {resultData.current.visibility} m</div>
            </div>
    );
}

export default Current;