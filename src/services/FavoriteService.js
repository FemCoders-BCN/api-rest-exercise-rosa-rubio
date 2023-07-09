import axios from "axios";

// axios.defaults.baseURL = 'https://localhost:5000/pictures';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

export default function getAll() {
    const response = axios.get('http://localhost:5000/pictures');
    return response;
  };

export function postPictures(savedData) {
        axios.post('http://localhost:5000/pictures', savedData)
        .then(response => {
          console.log('Data saved to server:', response.data);
        })
        .catch(error => {
          console.error('Error saving data:', error.message);
        });
}
