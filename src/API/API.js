import axios from "axios";

const BASE_URL = "https://random-data-api.com/api/v2/";https://random-data-api.com/api/v2/users?size=2&is_xml=true

const getData = (subject, amount) => {
    const data = axios.get(`${BASE_URL}/${subject}/size=${amount}&is_xml=true`);
    return data;
};

export default getData;