import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const Navbar = () => {

    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>Reading list</h1>
            <p>You currently have {books.length} books in your reading list</p>
        </div>
    )
}

export default Navbar;