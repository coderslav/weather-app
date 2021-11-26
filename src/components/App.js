import React, { useState } from 'react';
import '@styles/App.css';
import ListOfCities from '@src/listOfCities.json';
import Animation from '@components/Animation';
import SearchBar from '@components/SearchBar';

function App() {
    const [returnedData, setReturnedData] = useState({});

    const sendToApp = (city, time) => {
        let returnedDataObject = {
            city: city,
            time: time,
        };
        setReturnedData(returnedDataObject);
    };

    return (
        <React.Fragment>
            <Animation />
            {Object.keys(returnedData).length == 2 ? <div></div> : <SearchBar data={ListOfCities} sendToApp={sendToApp} />}
        </React.Fragment>
    );
}

export default App;
