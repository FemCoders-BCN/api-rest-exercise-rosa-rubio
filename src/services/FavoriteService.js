import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:5000/pictures';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const FavoriteService = () => {

const baseUrl = 'http://localhost:5000/pictures';
const urlGetById = '?id';


const getAll = () => {
    const response = axios.get(baseUrl);
    return response;
  };

const getById = (id) => {
  const response = axios.get(`${baseUrl}/${urlGetById}=${id}`);
  return response;
  }; 
  
const postPictures = (name, url) => {
    const response = axios.post(baseUrl, {
          author: name,
          download_url: url
      })
    return response;
}

const updatePictures = (id, name, url) => {
  const response = axios.put(`${baseUrl}/${id}`, {
    author: name,
    download_url: url
})
  return response;
}

const deletePicture = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`);
  return response;
};


return {
  getAll,
  getById,
  postPictures,
  updatePictures,
  deletePicture
}

}
