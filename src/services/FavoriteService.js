import axios from "axios";

// axios.defaults.baseURL = 'https://localhost:5000/pictures';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

export default function getAll() {
    const response = axios.get('http://localhost:5000/pictures');
    return response;
  };

export function postPictures() {
    const response = axios.post('http://localhost:5000/pictures', {
          author: "Ale Esca",
          download_url: "https://picsum.photos/id/25/5000/3333"
      })
    return response;
}
