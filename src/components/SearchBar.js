import React, {useState} from "react";
import '@styles/SearchBar.css';
import PropTypes from 'prop-types';
import Search from '@mui/icons-material/search';
import Close from '@mui/icons-material/close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { yellow, common } from '@mui/material/colors';

function SearchBar({placeholder, data}){
    let radioSubmitResult = '';

    const [filteredData, setFilteredData] = useState([]);
    const [searchStateFlag, setSearchStateFlag] = useState(false);
    const [wordEntered, setWordEntered] = useState('');

    const radioProp = {
        color: common['white'],
        '&.Mui-checked': {
            color: yellow[600],
        },
    };

    const noSpaceOnStartFilter = (input) => {
        if (/^\s/.test(input)){
            return '';
        }
        return input;
    };
    const handleFilter = (event) => {
        const searchWord = noSpaceOnStartFilter(event.target.value);
        setWordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === ''){
            setSearchStateFlag(false);
            setFilteredData([]);
        }else{
            setSearchStateFlag(true);
            const matchList = newFilter.filter((value) => {
                return value.toLowerCase() === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (matchList.length !== 0){
                setFilteredData(matchList);
            }else{
                setFilteredData(newFilter);
            }

        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
        setSearchStateFlag(false);
    };
    const handleSubmit = (event) => {
        if (event.keyCode === 13 || event.type === 'click') {
            event.preventDefault();
            const searchWord = event.keyCode === 13 ? event.target.value: event.target.textContent;
            const filter = data.filter((value)=>{
                return value.toLowerCase() === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (filter.length !== 0){
                console.log('Done!');
                console.log(filter);
            }else{
                console.log('Nope :(');
                console.log(filter);
            }
            console.log('Hello World!');
        }
    };
    const handleRadio = (event)=> {
        radioSubmitResult = event.target.value;
        console.log(radioSubmitResult);
    };

    return (
        <div className='search'>
            <div className='alertBox'><span style={{color: '#ff495f'}}>Select a time period:</span><span style={{color: '#33495f', display: 'none'}}>No data for this city :(</span></div>
            <FormControl id='radioSet' component='fieldset'>
                <RadioGroup row aria-label='weather' name='row-radio-buttons-group'>
                    <FormControlLabel id='nowRadioButton' value='Now' control={<Radio sx={radioProp} onChange={handleRadio}/>} label='Now' />
                    <FormControlLabel id='2daysRadioButton' value='Next 2 days' control={<Radio sx={radioProp} onChange={handleRadio}/>} label='Next 2 days' />
                    <FormControlLabel id='weekRadioButton' value='This week' control={<Radio sx={radioProp} onChange={handleRadio}/>} label='This week' />
                </RadioGroup>
            </FormControl>
            <div className='searchInputSet'>
                <input className='searchInput' type='text' placeholder={placeholder} value={wordEntered} onChange={handleFilter} onKeyUp={handleSubmit}/>
                <div className='searchIcon'>{searchStateFlag ? <Close id='clearBtn' onClick={clearInput}/> : <Search id='searchBtn'/>}</div>
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 15).map((value, key)=>{
                        return <a className='dataItem' href={value} key={key} onClick={handleSubmit} target='_blank' rel='noreferrer'>{value}</a>;
                    })}
                </div>
            )}
        </div>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default SearchBar;