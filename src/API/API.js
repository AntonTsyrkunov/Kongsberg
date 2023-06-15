import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1";
const API_KEY = "AIzaSyD7siH3qgQrWd6jVuDj43il8r36NIvUmEI";

const getBooks = () => {
    const response = axios.get(`${BASE_URL}/volumes?key=${API_KEY}`);
    return response;
};

const getBooksByAuthor = (author) => {
      const response = axios.get(`${BASE_URL}/volumes`, {
        params: {
          q: `inauthor:${author}`,
          maxResults: 10, // Specify the maximum number of results you want to retrieve
        },
      });  
      return response;
      
      // Process the book data as needed
    //   books.forEach((book) => {
    //     const title = book.volumeInfo.title;
    //     console.log(title);
    //   });
   
    }

    export default {
        getBooks,
        getBooksByAuthor
    };


