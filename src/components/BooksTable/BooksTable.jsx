import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { useState } from 'react';

const BooksTable = ({
  books,
  loading,
  onAuthorSearch,
  handleBackFromTable,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookdata, setBookData] = useState([]);

  const toggleModal = book => {
    if (bookdata.length === 0) {
      setBookData(book);
    } else {
      setBookData([]);
    }
    setModalIsOpen(!modalIsOpen);
  };

  const getAuthorBooks = author => {
    onAuthorSearch(author);
  };

  return (
    <>
      <div>
        <button type="button" onClick={() => handleBackFromTable()}>
          Home
        </button>
        {'>Searched books'}
      </div>

      {books && books.length > 0 ? (
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
                <th>Cover</th>
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
                  <td>
                    {book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.smallThumbnail ? (
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt=""
                        width="50%"
                        height="50%"
                      />
                    ) : (
                      <p>No thumbnail available</p>
                    )}
                  </td>
                  <td>{book.volumeInfo.publishedDate}</td>
                  <td>{book.volumeInfo.language}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => toggleModal(book)}
                    >
                      {"Press to learn info"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      ) : null}
      {modalIsOpen && (
        <Modal toggleModal={toggleModal} bookdata={bookdata}>
          <p>{bookdata.id}</p>
          <p>{bookdata.volumeInfo.title}</p>
          <p>{bookdata.volumeInfo.subtitle}</p>
          <p>{bookdata.volumeInfo.authors}</p>
          <div>
            {bookdata.volumeInfo.imageLinks &&
            bookdata.volumeInfo.imageLinks.smallThumbnail ? (
              <img src={bookdata.volumeInfo.imageLinks.smallThumbnail} alt="" />
            ) : (
              <p>No thumbnail available</p>
            )}
          </div>

          <p>{bookdata.volumeInfo.publishedDate}</p>
          <p>{bookdata.volumeInfo.language}</p>
        </Modal>
      )}
    </>
  );
};

export default BooksTable;
