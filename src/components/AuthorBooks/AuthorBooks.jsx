
import { useState } from 'react';

const AuthorBooks = ({ loading, authorsBooks }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookdata, setBookData] = useState([]);

  const toggleModal = book => {
    if (bookdata.length === 0) {
      setBookData(book);
    }
    setModalIsOpen(!modalIsOpen);
  };

  return (    
    <>
      {console.log(authorsBooks)}
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
                {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? (
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
                <button
                  type="button"
                  onClick={() => toggleModal(book)}
                ></button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export { AuthorBooks };
