import React from "react";
import '@styles/App.css';
import ListOfCities from '@src/listOfCities.json';

import Animation from "@components/Animation";
import SearchBar from "@components/SearchBar";


function App() {
    return (
        <React.Fragment>
            <Animation/>
            <SearchBar placeholder='City...' data={ListOfCities}/>
        </React.Fragment>
    );
}

export default App;