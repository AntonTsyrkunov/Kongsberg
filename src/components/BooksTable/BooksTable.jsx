import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import css from '../Modal/styles.module.css'

import { Button, Table } from 'react-bootstrap';

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
        <Button variant="link" onClick={() => handleBackFromTable()}>
          Home
        </Button>
        {' > Searched books'}
      </div>

      {books && books.length > 0 ? (
        loading ? (
          <Loader />
        ) : (
          <Table striped bordered hover responsive>
            <thead className="text-center">
              <tr>
                <th>Book's ID</th>
                <th>Title</th>
                <th>Subtitle</th>
                <th>Author/Authors</th>
                <th>Cover</th>
                <th>Date of publishing</th>
                <th>Language</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr
                  key={book.id}                  
                >
                  <td className="text-center">{book.id}</td>
                  <td className="text-center">{book.volumeInfo.title}</td>
                  <td className="text-center">
                    {book.volumeInfo.subtitle ? (
                      book.volumeInfo.subtitle
                    ) : ('No subtitle'
                    )}
                  </td>
                  <td className="text-center">
                    {book.volumeInfo.authors ? (<Button
                      variant="link"
                      onClick={() => getAuthorBooks(book.volumeInfo.authors)}
                    >
                      {book.volumeInfo.authors}
                    </Button>) : ('Not mentioned')

                    }
                    
                  </td>
                  <td className="text-center">
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
                  <td className="text-center">
                    {book.volumeInfo.publishedDate}
                  </td>
                  <td className="text-center">{book.volumeInfo.language}</td>
                  <td className="text-center">
                    <Button variant="link" onClick={() => toggleModal(book)}>
                      Expanded view
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )
      ) : null}
      {modalIsOpen && (
        <Modal toggleModal={toggleModal} bookdata={bookdata} className={css.modal_container}>
          <p>Book ID: {bookdata.id}</p>
          <p>Book title: {bookdata.volumeInfo.title}</p>
          <p>Book subtitle: {bookdata.volumeInfo.subtitle}</p>
          <p>Book autors: {bookdata.volumeInfo.authors}</p>
          <div>
            {bookdata.volumeInfo.imageLinks &&
            bookdata.volumeInfo.imageLinks.smallThumbnail ? (
              <img src={bookdata.volumeInfo.imageLinks.smallThumbnail} alt="Cover" />
            ) : (
              <p>No thumbnail available</p>
            )}
          </div>
          <p>Published date: {bookdata.volumeInfo.publishedDate}</p>
          <p>Language: {bookdata.volumeInfo.language}</p>
        </Modal>
      )}
    </>
  );
};

export default BooksTable;
