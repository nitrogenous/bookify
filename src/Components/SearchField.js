import React, { useContext } from 'react';
import { APIContext } from '../Providers/APIProvider';

function SearchField () {
    const { setBookName } = useContext(APIContext);

    const bookNameOnChange = function (event) {
        const bookName = event.target.value;

        if(bookName.length > 2) {
            setBookName(bookName);
        }
    };

    return (
        <div className='search-field wrapper'>
            <input className='search-field search-input' onChange={bookNameOnChange}/>
            <button className='search-field search-button'> Search </button>
        </div>
    );
};

export default SearchField;
