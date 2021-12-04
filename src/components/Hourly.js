import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Hourly.css';
import '@styles/weather-icons.css';
import '@styles/weather-icons-wind.css';
import {VisibilityRounded} from '@mui/icons-material';

Hourly.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

function Hourly({ resultData, resultCityInfo }) {
    return (
        <div className='hourly-weather-wrap'>
            <div className='hourly-weather-wrap-day-one'>
                <div className='hourly-grid-item day-grid'>20 ноября</div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Ночь</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Утро</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>День</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Вечер</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
            </div>
            <div className='hourly-weather-wrap-day-two'>
                <div className='hourly-grid-item day-grid'>21 ноября</div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Ночь</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Утро</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>День</div>
                    <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
                <div className='hourly-grid-item'>
                    <div className='time-of-day-section time-of-day'>Вечер</div>
                     <div className='time-of-day-section picture-time-of-day'><i className='wi wi-day-sunny hourly'/></div>
                    <div className='time-of-day-section temperature-time-of-day'>33<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section feels-like-time-of-day'>Feeling like 36<i className='wi wi-degrees hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind hourly'/> 2.1 m/s <i className='wi wi-wind towards-336-deg hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer hourly'/> 1008 hPa</div>
                    <div className='time-of-day-section time-of-day-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity hourly'/></div>
                    <div className='time-of-day-section time-of-day-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityHourly'/> 1000 m</div>
                </div>
            </div>
        </div>
    );
}

export default Hourly;