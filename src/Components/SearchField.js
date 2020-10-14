import React, { useContext } from 'react';
import { APIContext } from '../Providers/APIProvider';

function SearchField () {
    const { setBookName } = useContext(APIContext);

    const bookNameOnChange = (event) => {
        const bookName = event.target.value;

        if(bookName.length > 2) {
            setBookName(bookName);
        }
    };

    return (
        <div className="ui action input">
            <input type="text" placeholder="Search..." onChange={bookNameOnChange} />
            <button className="ui button">Search</button>
        </div>
    );
};

export default SearchField;
