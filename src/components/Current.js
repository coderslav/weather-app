import React from 'react';
import '@styles/Current.css';
import PropTypes from 'prop-types';

Current.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    resultCityInfo: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

function Current({resultData, resultCityInfo}) {
    return (
            <div className='current-weather-wrap'>
                <div className='grid-item main'>
                    <div className='city-info'>Odessa, UA</div>
                    <div className='date-time'>25/12/1997 16:33</div>
                    <div className='weather-picture'>Тут картинка</div>
                    <div className='temperature'>Градусы</div>
                    <div className='temperature-feeling'>Как ощущаются градусы</div>
                </div>
                <div className='grid-item right-side sunrise'>Восход: 05:00</div>
                <div className='grid-item right-side sunset'>Закат: 18:00</div>
                <div className='grid-item right-side pressure'>Давление: 1008hPa</div>
                <div className='grid-item right-side wind'>Ветер: 2.1 m/s NNW</div>
                <div className='grid-item right-side humidity'>83%</div>
                <div className='grid-item right-side visibility'>1000 m</div>
            </div>
    );
}

export default Current;