import React from 'react';
import '@styles/ResultPage.css';
import PropTypes from 'prop-types';

function ResultPage({ resultData }){
    console.log(resultData);
    console.log(JSON.stringify(resultData, null, '\t'));
    return (<div className='test-div'>{JSON.stringify(resultData)}</div>);
}

ResultPage.propTypes = {
    resultData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default ResultPage;