import React, { useState } from 'react';
import '@styles/SearchBar.css';
import PropTypes from 'prop-types';
import Search from '@mui/icons-material/Search';
import Close from '@mui/icons-material/Close';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { yellow, common } from '@mui/material/colors';

function SearchBar({ data }) {
    let resultData = {
        city: '',
        time: '',
    };

    const [filteredData, setFilteredData] = useState([]);
    const [searchStateFlag, setSearchStateFlag] = useState(false);
    const [wordEntered, setWordEntered] = useState('');
    const [inputErrorState, setInputErrorState] = useState(false);
    const [radioErrorState, setRadioErrorState] = useState('noChecked');

    const radioProp = {
        color: common['white'],
        '&.Mui-checked': {
            color: yellow[600],
        },
    };

    const noSpaceOnStartFilter = (input) => {
        if (/^\s/.test(input)) {
            return '';
        }
        return input;
    };
    const handleFilter = (event) => {
        if (radioErrorState !== 'checked') {
            setRadioErrorState('noChecked');
        }
        setInputErrorState(false);
        const searchWord = noSpaceOnStartFilter(event.target.value);
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setSearchStateFlag(false);
            setFilteredData([]);
        } else {
            setSearchStateFlag(true);
            const matchList = newFilter.filter((value) => {
                return value.toLowerCase() === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (matchList.length !== 0) {
                // TODO
                matchList.forEach((elem) => {
                    newFilter.unshift(elem);
                });
                setFilteredData(newFilter);
            } else {
                setFilteredData(newFilter);
            }
        }
    };
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
        setSearchStateFlag(false);
    };

    const handleDataResultChoice = (event) => {
        event.preventDefault();
        setWordEntered(event.target.textContent);
        setFilteredData([]);
    };

    const handleSubmit = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            const searchWord = event.target.value;
            const filter = data.filter((value) => {
                return value.toLowerCase() === searchWord.toLowerCase().replaceAll(' ', '');
            });
            if (filter.length !== 0) {
                setWordEntered('');
                if (radioErrorState === 'noChecked') {
                    setRadioErrorState('yes');
                    console.log('Nice, but no Radio!');
                    return;
                }
                console.log('Done!');
                console.log(filter);
            } else {
                setInputErrorState(true);
                setWordEntered('');
                if (radioErrorState === 'noChecked') {
                    setRadioErrorState('yes');
                }
                console.log('Nope :(');
                console.log(filter);
            }
        }
    };
    const handleRadio = (event) => {
        setRadioErrorState('checked');
        resultData.time = event.target.value;
        console.log(resultData);
    };

    return (
        <div className='search'>
            <FormControl id='radioSet' component='fieldset'>
                <RadioGroup row aria-label='weather' name='row-radio-buttons-group'>
                    <FormControlLabel id={radioErrorState === 'yes' ? 'nowRadioButtonError' : 'nowRadioButton'} value='Now' control={<Radio sx={radioProp} onChange={handleRadio} />} label='Now' />
                    <FormControlLabel id={radioErrorState === 'yes' ? 'twoDaysRadioButtonError' : 'twoDaysRadioButton'} value='Next 2 days' control={<Radio sx={radioProp} onChange={handleRadio} />} label='Next 2 days' />
                    <FormControlLabel id={radioErrorState === 'yes' ? 'weekRadioButtonError' : 'weekRadioButton'} value='This week' control={<Radio sx={radioProp} onChange={handleRadio} />} label='This week' />
                </RadioGroup>
            </FormControl>
            <div className='searchInputSet'>
                <input className={inputErrorState ? 'searchInputError' : 'searchInput'} type='text' placeholder='City...' value={wordEntered} onChange={handleFilter} onKeyUp={handleSubmit} />
                <div className='searchIcon'>{searchStateFlag ? <Close id='clearBtn' onClick={clearInput} /> : <Search id='searchBtn' />}</div>
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <a className='dataItem' href={value} key={key} onClick={handleDataResultChoice} target='_blank' rel='noreferrer'>
                                {value}
                            </a>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

SearchBar.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default SearchBar;
