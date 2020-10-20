import React, { useContext } from 'react';
import BookItem from '../Components/BookItem';
import { BooksContext } from '../Providers/BooksProvider';

const BookListings = () => {
    const { bookList } = useContext(BooksContext);

    return (
        <div className='book-listing-wrapper'>
            { bookList.map(bookDetails=> <BookItem details={bookDetails.volumeInfo} key={bookDetails.id}/>) }
        </div>
    );
};

export default BookListings;