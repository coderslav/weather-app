import React from 'react';
import '@styles/Current.css';
import '@styles/weather-icons.css';
import '@styles/weather-icons-wind.css';
import PropTypes from 'prop-types';
import {VisibilityRounded} from '@mui/icons-material';

Current.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

function Current({resultData, resultCityInfo}) {
    return (
            <div className='current-weather-wrap'>
                <div className='grid-item main'>
                    <div className='city-info'>Odessa, UA</div>
                    <div className='time'>16:33</div>
                    <i className='wi wi-day-sunny current'/>
                    <div className='temperature'>33<i className='wi wi-degrees current'/></div>
                    <div className='temperature-feeling'>Feeling like 36<i className='wi wi-degrees current'/></div>
                </div>
                <div className='grid-item right-side sunrise'><i className='wi wi-sunrise current'/> 05:00</div>
                <div className='grid-item right-side sunset'><i className='wi wi-sunset current'/> 18:00</div>
                <div className='grid-item right-side humidity'>c</div>
                <div className='grid-item right-side wind'><i className='wi wi-strong-wind current'/> 2.1 m/s <i className='wi wi-wind towards-336-deg current'/></div>
                <div className='grid-item right-side pressure'><i className='wi wi-barometer current'/> 1008 hPa</div>
                <div className='grid-item right-side visibility'><VisibilityRounded id='visibilityCurrent'/> 1000 m</div>
            </div>
    );
}

export default Current;