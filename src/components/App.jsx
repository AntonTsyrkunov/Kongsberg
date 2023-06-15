import Footer from './Footer/Footer';
import Header from './Header/Header';
import BooksTable from './BooksTable/BooksTable';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';

import { useState, useEffect } from 'react';

import getBooks from '../API/API';

export const App = () => {
  const [books, setBooks] = useState([]);
  const [querry, setQuerry] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = name => {
    setQuerry(name);
    setBooks([]);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getBooks(querry);
      setBooks([...prev, ...data.items]);
      setLoading(false);
    };
    fetchData();
  }, [querry]);

  return (
    <div>
      <Header onSubmit={handleSearch}></Header>
      <BooksTable loading={loading} books={books}></BooksTable>
      <Footer></Footer>
    </div>
  );
};
