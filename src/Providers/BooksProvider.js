import React, { createContext, useState, useEffect } from 'react';

const BooksContext = createContext();
const { Provider, Consumer: BooksConsumer } = BooksContext;
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';


const BooksProvider = ({children}) => {
    const [ bookList, setBookList ] = useState(Array);

    const searchForBooks = (bookName) => {
        const searchQuery = baseUrl + encodeURI(bookName);

        fetch(searchQuery)
            .then(response => response.json())
            .then((responseValue) => {
                setBookList(responseValue.items);
            });

    };

    return <Provider value={{ searchForBooks, bookList }} >{children}</Provider>
};

export { BooksProvider, BooksConsumer, BooksContext };