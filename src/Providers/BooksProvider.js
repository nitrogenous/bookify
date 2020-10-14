import React, { createContext, useState, useEffect } from 'react';

const BooksContext = createContext();
const { Provider, Consumer: BooksConsumer } = BooksContext;
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';


const BooksProvider = ({children}) => {
    const [ books, setBooks ] = useState(Array);

    useEffect(() => {
        console.log(books);
    });

    const searchForBooks = (bookName) => {
        const searchQuery = baseUrl + encodeURI(bookName);

        fetch(searchQuery)
            .then(response => response.json())
            .then((responseValue) => {
                setBooks(responseValue.items);
            });

    };

    return <Provider value={{ searchForBooks }} >{children}</Provider>
};

export { BooksProvider, BooksConsumer, BooksContext };