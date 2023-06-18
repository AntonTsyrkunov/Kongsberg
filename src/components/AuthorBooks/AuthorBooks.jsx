import Modal from '../Modal/Modal';
import { useState } from 'react';

const AuthorBooks = ({ loading, authorsBooks, handleBackFromAuthor }) => {
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

  return (
    <>    
      <div>
        {'Home>'}
        <button type="button" onClick={() => handleBackFromAuthor()}>
          {'Searched books'}
        </button>
        {'>Authors books'}
      </div>
      {authorsBooks.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Book's ID</th>
              <th>Title</th>
              <th>Publisher</th>
              <th>Date of publishing</th>
              <th>Description</th>
              <th>Page count</th>
              <th>Tumbnail</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {authorsBooks.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.volumeInfo.title}</td>
                <td>{book.volumeInfo.publisher}</td>
                <td>{book.volumeInfo.publishedDate}</td>
                <td>{book.volumeInfo.description}</td>
                <td>{book.volumeInfo.pageCount}</td>
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
      )}      
      {modalIsOpen && (
        <Modal toggleModal={toggleModal} bookdata={bookdata}>
          <p>{bookdata.id}</p>
          <p>{bookdata.volumeInfo.title}</p>
          <p>{bookdata.volumeInfo.publishe}</p>
          <p>{bookdata.volumeInfo.publishedDate}</p>
          <p>{bookdata.volumeInfo.description}</p>
          <p>{bookdata.volumeInfo.pageCount}</p>
          <div>
            {bookdata.volumeInfo.imageLinks &&
            bookdata.volumeInfo.imageLinks.smallThumbnail ? (
              <img
                src={bookdata.volumeInfo.imageLinks.smallThumbnail}
                alt=""
              />
            ) : (
              <p>No thumbnail available</p>
            )}
          </div>
          <p>{bookdata.volumeInfo.language}</p>
        </Modal>
      )}
    </>
  );
};

export default AuthorBooks;
