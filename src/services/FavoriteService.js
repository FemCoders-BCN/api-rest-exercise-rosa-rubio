import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/pictures';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = () => {

const getAll = () => {
    const response = axios.get();
    return response;
  };

const postPictures = (name, url) => {
    const response = axios.post('http://localhost:5000/pictures', {
          author: name,
          download_url: url
      })
    return response;
}

return {
  getAll,
  postPictures
}

}
