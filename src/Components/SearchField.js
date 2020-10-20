import React, { useState, useContext } from 'react';
import { BooksContext } from '../Providers/BooksProvider';

const SearchField = () => {
    const [ bookName, setBookName ] = useState(String);
    const { searchForBooks } = useContext(BooksContext); 

    const searchByEnter = (event) => {
        if (event.key === 'Enter' && bookName.length > 3) {
            searchForBooks(bookName);
        }
    };

    return (
        <div className='search-field-wrapper'>
            <div className="ui action input">
                <input 
                    type="text" 
                    placeholder="Book Name..." 
                    onChange={event => setBookName(event.target.value)} 
                    onKeyUp={searchByEnter.bind(this)}
                />
                <button 
                    className={"ui button " + (bookName.length <= 3 && "disabled")} 
                    onClick={() => searchForBooks(bookName)}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchField;
