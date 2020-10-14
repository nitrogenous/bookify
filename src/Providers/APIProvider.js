import React, { createContext, useState, useEffect } from 'react';

const APIContext = createContext();
const { Provider, Consumer: APIConsumer } = APIContext;

const APIProvider = ({children}) => {
    const [ bookName, setBookName ] = useState(String);

    useEffect(() => {
        console.log(bookName);
    });

    return <Provider value={{ setBookName }} >{children}</Provider>
};

export { APIProvider, APIConsumer, APIContext };