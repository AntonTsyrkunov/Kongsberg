import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import css from '../Modal/styles.module.css'

const AuthorBooks = ({
  loading,
  authorsBooks,
  handleBackFromAuthor,
  handleBackHomeFromAuthor,
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

  return (
    <>
      <div>
        <Button variant="link" onClick={() => handleBackHomeFromAuthor()}>
          Home
        </Button>
        <Button variant="link" onClick={() => handleBackFromAuthor()}>
          Searched books
        </Button>
        {' > Authors books'}
      </div>
      {authorsBooks && authorsBooks.length > 0 ? (
        loading ? (
          <Loader />
        ) : (
          <Table striped bordered hover responsive>
            <thead className="text-center">
              <tr>
                <th>Book's ID</th>
                <th>Title</th>
                <th>Publisher</th>
                <th>Date of publishing</th>
                <th>Description</th>
                <th>Page count</th>
                <th>Thumbnail</th>
                <th>Language</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {authorsBooks.map((book, index) => (
                <tr key={book.id}>
                  <td className="text-center">{book.id}</td>
                  <td className="text-center">{book.volumeInfo.title}</td>
                  <td className="text-center">
                    {book.volumeInfo.publisher
                      ? book.volumeInfo.publisher
                      : 'Unknown'}
                  </td>
                  <td className="text-center">
                    {book.volumeInfo.publishedDate
                      ? book.volumeInfo.publishedDate
                      : 'Unknown'}
                  </td>
                  <td className="text-center">
                    {book.volumeInfo.description
                      ? book.volumeInfo.description
                      : 'No description available'}
                  </td>
                  <td className="text-center">{book.volumeInfo.pageCount}</td>
                  <td className="text-center">
                    {book.volumeInfo.imageLinks &&
                    book.volumeInfo.imageLinks.smallThumbnail ? (
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt="Cover"
                        width="50%"
                        height="50%"
                      />
                    ) : (
                      <p>No thumbnail available</p>
                    )}
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
          <p>Publisher: {bookdata.volumeInfo.publisher
              ? bookdata.volumeInfo.publisher
              : null}
          </p>
          <p>Published date: {bookdata.volumeInfo.publishedDate
              ? bookdata.volumeInfo.publishedDate
              : null}
          </p>
          <p className={css.description}>
            Description: {bookdata.volumeInfo.description
              ? bookdata.volumeInfo.description
              : 'No description available'}
          </p>
          <p>Page count: {bookdata.volumeInfo.pageCount}</p>
          <div>
            {bookdata.volumeInfo.imageLinks &&
            bookdata.volumeInfo.imageLinks.smallThumbnail ? (
              <img
                src={bookdata.volumeInfo.imageLinks.smallThumbnail}
                alt="Cover"
                width="50%"
                height="50%"
              />
            ) : (
              <p>No thumbnail available</p>
            )}
          </div>
          <p>Language: {bookdata.volumeInfo.language}</p>
        </Modal>
      )}
    </>
  );
};

export default AuthorBooks;
