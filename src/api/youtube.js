import axios from 'axios'

const KEY = 'AIzaSyAAuIynz8NVDa_CvV3B8cimjKeMoNSAmGI'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // query string parameters we want to add on to the request
    params: {
        part: 'snippet',
        maResults: 5,
        key: KEY,
    }
});