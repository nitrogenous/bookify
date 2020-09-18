import React, { createContext, useState, useEffect } from 'react';

const APIContext = createContext();
const { Provider, Consumer: APIConsumer } = APIContext;

const APIProvider = ({children}) => {

    return <Provider>{children}</Provider>
};

export { APIProvider, APIConsumer, APIContext };