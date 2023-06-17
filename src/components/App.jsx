import { Route, Routes } from 'react-router-dom';
import { BooksTable } from './BooksTable/BooksTable';
import { AuthorBooks } from './AuthorBooks/AuthorBooks';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Home } from './Home/Home';

import { useState, useEffect } from 'react';

import { getBooks, getBooksByAuthor } from '../API/API';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [querry, setQuerry] = useState('');
  const [authorsBooks, setAuthorsBooks] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearchByQuery = title => {
    setQuerry(title);
    // console.log(books);
  };

  const handleSearchByAuthor = name => {
    setAuthorName(name);
    console.log(authorsBooks);
  };

  useEffect(() => {
    if (!querry) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const data = await getBooks(querry);
      setBooks(prev => [...prev, ...data.data.items]);
      setLoading(false);
    };
    fetchData();
  }, [querry]);

  useEffect(() => {
    if (!authorName) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const data = await getBooksByAuthor(authorName);
      setAuthorsBooks(data.data.items);
      setLoading(false);
    };
    fetchData();
  }, [authorName]);

  return (
    <div>
      <Header onSubmit={handleSearchByQuery}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="bookstable"
          element={
            <BooksTable
              loading={loading}
              books={books}
              onAuthorSearch={handleSearchByAuthor}
            />
          }
        />
        <Route
          path="authorbooks"
          element={
            <AuthorBooks loading={loading} authorsBooks={authorsBooks} />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};
