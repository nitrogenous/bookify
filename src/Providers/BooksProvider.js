import React, { createContext, useState } from 'react';

const BooksContext = createContext();
const { Provider, Consumer: BooksConsumer } = BooksContext;
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

const BooksProvider = ({children}) => {
    const [ bookList, setBookList ] = useState(Array);

    const searchForBooks = (bookName, maxResults = 40) => {
        const searchQuery = baseUrl + encodeURI(bookName) + '&maxResults=' + maxResults;

        fetch(searchQuery)
            .then(response => response.json())
            .then((responseValue) => {
                setBookList(responseValue.items);
            });

    };

    return <Provider value={{ searchForBooks, bookList }} >{children}</Provider>
};

export { BooksProvider, BooksConsumer, BooksContext };