import React from 'react';
import '@styles/App.css';
import ListOfCities from '@src/listOfCities.json';
import SearchBar from '@components/SearchBar';
import APIkey from '@root/APIkey.js';

function App() {

    return (
        <React.Fragment>
            <SearchBar data={ListOfCities} APIkey={APIkey} />
        </React.Fragment>
    );
}

export default App;
