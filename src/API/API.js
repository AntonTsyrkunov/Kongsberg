import axios from "axios";

const BASE_URL = "https://www.googleapis.com/books/v1";
const API_KEY = "AIzaSyD7siH3qgQrWd6jVuDj43il8r36NIvUmEI";

const getBooks = (query) => {
    const response = axios.get(`${BASE_URL}/volumes?key=${API_KEY}`);
    return response;
};

export default getBooks;


