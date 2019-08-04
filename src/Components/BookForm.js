import React, { useState, useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookForm = () => {

    const { addBook } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        // Call addBook() function from BookContext
        addBook(title, author);

        // Clear the inputs
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={ (e) => setTitle(e.target.value) } />
            <input type="text" placeholder="Book author" value={author} onChange={ (e) => setAuthor(e.target.value) } />
            <input type="submit" value="Add book" />
        </form>
    );
};

export default BookForm;