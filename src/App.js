import React from 'react';
import { Providers } from "./Providers";
import SearchField from './Components/SearchField';
import BookListings from './Containers/BookListings';

function App() {
  return (
    <Providers>
      <SearchField />
      <BookListings />      
    </Providers>
  );
}

export default App;
