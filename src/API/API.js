import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1";
const API_KEY = "AIzaSyD7siH3qgQrWd6jVuDj43il8r36NIvUmEI";

export const getBooks = (title) => {
    const response = axios.get(`${BASE_URL}/volumes?q=${title}+inauthor&key=${API_KEY}`);
    return response;
};
// https://www.googleapis.com/books/v1/volumes?q=inauthor:"Richard+Moreno"&key=my_key
export const getBooksByAuthor = (author) => {
      const response = axios.get(`${BASE_URL}/volumes`, {
        params: {
          q: `inauthor:${author}`,
          key: API_KEY
        },
      });  
      return response;    
    }

 


