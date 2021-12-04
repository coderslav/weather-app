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

// function timeConvert(unix_timestamp, timezone){
//     console.log(unix_timestamp);
//     console.log(timezone);
//     let date = new Date(unix_timestamp * 1000);
//     console.log(date);
//     console.log(date.toLocaleString('en-GB', {timeZone: timezone, weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric',  hour: '2-digit', minute: '2-digit'}));
//     return date.toLocaleString('en-GB', {timeZone: timezone, weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric',  hour: '2-digit', minute: '2-digit'});
// }
//
// return resultData.current ? current: resultData.hourly ? some_test_2: some_test_3;

function Result({ resultData, resultCityInfo }){
    console.log(resultData);
    console.log(JSON.stringify(resultData, null, '\t'));



    // TODO не забыть вернуть продакшен проверку условия, функцию конвертации времени (закоментчено в шапке), компоненты для погоды на 2 дня и погоды на неделю
    return <Daily resultData={resultData} resultCityInfo={resultCityInfo} />;
}



export default Result;