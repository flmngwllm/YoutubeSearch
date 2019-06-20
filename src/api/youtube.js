import axios from 'axios'

//saving the api key to a variable
const KEY = 'AIzaSyAAuIynz8NVDa_CvV3B8cimjKeMoNSAmGI'

//creating a custom instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // query string parameters we want to add on to the request
    params: {
        part: 'snippet',
        maResults: 5,
        key: KEY,
    }
});