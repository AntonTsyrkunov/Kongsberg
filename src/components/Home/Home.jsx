import BooksTable from '../BooksTable/BooksTable';
import AuthorBooks from '../AuthorBooks/AuthorBooks';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { useState, useEffect } from 'react';

import { getBooks, getBooksByAuthor } from 'API/API';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [querry, setQuerry] = useState('');
  const [authorsBooks, setAuthorsBooks] = useState([]);
  const [authorName, setAuthorName] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayHomepage, setDisplayHomepage] = useState(true);
  const [displayCommonTable, setDisplayCommonTable] = useState(false);
  const [displayAuthorTable, setDisplayAutorTable] = useState(false);

  const handleSearchByQuery = title => {
    setQuerry(title);
  };

  const handleSearchByAuthor = name => {
    setAuthorName(name);
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
      setDisplayHomepage(false);
      setDisplayCommonTable(true);
    };
    fetchData();
  }, [querry]);

  useEffect(() => {
    if (!authorName) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      setDisplayCommonTable(false);
      setDisplayAutorTable(true);
      const data = await getBooksByAuthor(authorName);
      setAuthorsBooks(data.data.items);
      setLoading(false);
    };
    fetchData();
  }, [authorName]);

  const handleBackFromTable = () => {
    setDisplayHomepage(true);
    setDisplayCommonTable(false);
    setBooks([]);
    setQuerry('');
  };

  const handleBackFromAuthor = () => {
    setDisplayCommonTable(true);
    setDisplayAutorTable(false);
    setAuthorName('');
    setAuthorsBooks([]);
  };

  return (
    <>
      <Header onSubmit={handleSearchByQuery}></Header>
      {
        displayHomepage && <p>Home</p>
      }
      {displayCommonTable && (
        <BooksTable
          loading={loading}
          books={books}
          onAuthorSearch={handleSearchByAuthor}
          handleBackFromTable={handleBackFromTable}
        />
      )}
      {displayAuthorTable && (
        <AuthorBooks
          loading={loading}
          authorsBooks={authorsBooks}
          handleBackFromAuthor={handleBackFromAuthor}
        />
      )}
      <Footer></Footer>
    </>
  );
};

export default Home;
