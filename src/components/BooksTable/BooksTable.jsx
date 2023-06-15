import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';

const BooksTable = ({ books, loading }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookdata, setBookData] = useState([]);

  const toggleModal = (book) => {
    if (bookdata.length === 0) {
      setBookData(book);
    }
    setModalIsOpen(!modalIsOpen);
  }

  <>
    {loading ? (
      <Loader />
    ) : ( books.length > 0 &&     
      <table>
        <tr>
          <th>Book's ID</th>
          <th>Title</th>
          <th>Subtitle</th>
          <th><button>Author/Authors</button></th>
          <th>Date of publishing</th>
          <th>Language</th>
          <th>Reader link</th>
        </tr>

        {books.map((book) => {
          <tr>
          <td>{book.id}</td>
          <td>{book.volumeInfo.title}</td>
          <td>{book.volumeInfo.subtitle}</td>
          <td><button>{books.volumeInfo.authors}</button></td>
          <td>{book.volumeInfo.publishedDate}</td>
          <td>{book.volumeInfo.language}</td>
          <td><a href="book.volumeInfo.accessInfo.webReaderLink">Read</a></td>
          <button type="button" onClick={() => toggleModal(book)}> </button>
        </tr>}      
        )} 
          
        

      </table>
    )}
  </>;
};

export default BooksTable;
