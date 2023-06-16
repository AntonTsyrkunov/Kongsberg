import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { useState } from 'react';

const BooksTable = ({ books, loading, onAuthorSearch }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookdata, setBookData] = useState([]);

  const toggleModal = book => {
    if (bookdata.length === 0) {
      setBookData(book);
    }
    setModalIsOpen(!modalIsOpen);
  };

  const getAuthorBooks = author => {
    onAuthorSearch(author);
  };

  return (
    <>
      {books.length > 0 ? (
        loading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Book's ID</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Author/Authors</th>
                <th>Date of publishing</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.volumeInfo.title}</td>
                  <td>{book.volumeInfo.subtitle}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => getAuthorBooks(book.volumeInfo.authors)}
                    >
                      {book.volumeInfo.authors}
                    </button>
                  </td>
                  <td>{book.volumeInfo.publishedDate}</td>
                  <td>{book.volumeInfo.language}</td>
                  
                  <button
                    type="button"
                    onClick={() => toggleModal(book)}
                  ></button>
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : null}
    </>
  );
};

export default BooksTable;
