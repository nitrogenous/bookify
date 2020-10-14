import React, { useState, useContext } from 'react';
import { BooksContext } from '../Providers/BooksProvider';

const SearchField = () => {
    const [ bookName, setBookName ] = useState(String);
    const { searchForBooks } = useContext(BooksContext); 

    return (
        <div className="ui action input">
            <input type="text" placeholder="Search..." onChange={event => setBookName(event.target.value)} />
            <button className="ui button" onClick={() => searchForBooks(bookName)}>Search</button>
        </div>
    );
};

export default SearchField;
