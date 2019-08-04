import React, { useContext } from 'react';

import { BookContext } from '../Contexts/BookContext';

import BookDetails from './BookDetails';

const BookList = () => {

    const { books } = useContext(BookContext);

    return books.length ? (
        <div className="book-list">
            <ul>
                {/* Map books array used from BookContext */}
                { books.map( book => {
                    return(
                        /* Display book item */
                        <BookDetails book={book} key={book.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read</div>
    )
}

export default BookList