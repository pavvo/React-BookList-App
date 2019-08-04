import React from 'react';

import BookContextProvider from './Contexts/BookContext';

import Navbar from './Components/Navbar';
import BookList from './Components/BookList';

const App = () => {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
