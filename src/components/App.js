import React from 'react';
import '@styles/App.css';
import ListOfCities from '@src/listOfCities.json';
import Search from '@components/Search';
import APIkey from '@root/APIkey.js';

function App() {

    return (
        <React.Fragment>
            <Search data={ListOfCities} APIkey={APIkey} />
        </React.Fragment>
    );
}

export default App;
