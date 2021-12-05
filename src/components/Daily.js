import React from 'react';
import PropTypes from 'prop-types';
import '@styles/Daily.css';
import {VisibilityRounded} from '@mui/icons-material';

Daily.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    timeConvert: PropTypes.func,
    weatherIconHandler: PropTypes.func
};

function Daily({resultData, resultCityInfo, timeConvert, weatherIconHandler}) {
    return (
        <div className='daily-wrap'>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 1</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 2</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 3</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 4</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 5</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 6</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
            <div className='daily-flex-item'>
                <div className='daily-section day'>
                    <div className='day'>День 7</div>
                    <i className='wi wi-sunrise daily'>05:00</i>
                    <i className='wi wi-sunset daily'>18:00</i>
                </div>
                <div className='daily-section picture-daily'><i className='wi wi-day-sunny daily'/></div>
                <div className='daily-section temperature-daily'>33<i className='wi wi-degrees daily'/> / 5<i className='wi wi-degrees daily'/></div>
                <div className='daily-section feels-like-daily'>Feeling like 36<i className='wi wi-degrees daily'/> / 10<i className='wi wi-degrees daily'/></div>
                <div className='daily-section daily-section-after-temperature wind-time-of-day'><i className='wi wi-strong-wind daily'/> 2.1 m/s <i className='wi wi-wind towards-336-deg daily'/></div>
                <div className='daily-section daily-section-after-temperature pressure-time-of-day'><i className='wi wi-barometer daily'/> 1008 hPa</div>
                <div className='daily-section daily-section-after-temperature humidity-time-of-day'>83 <i className='wi wi-humidity daily'/></div>
                <div className='daily-section daily-section-after-temperature visibility-time-of-day'><VisibilityRounded id='visibilityDaily'/> 1000 m</div>
            </div>
        </div>
    );
}

export default Daily;