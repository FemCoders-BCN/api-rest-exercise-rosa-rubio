import axios from "axios";

//estas son algunas configuraciones que tiene axios, mientras seguimos con el curso encontrarás más
axios.defaults.baseURL = 'https://picsum.photos';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const urlGetAll = '/v2/list';
  //Los endpoints que tienen llaves con un texto dentro, quiere decir que le has de pasar algún valor
  ///id/{image}/{size}, eso significa que image y size son valores que te dirá la documentación cómo se pasan.
  const urlGetById = '/id';
  ///Construye la url para el tercer endpoint
  const urlGetGrayscale = '/200/200?grayscale'

  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  
  const getById = (id) => {
    const response = axios.get(`${urlGetById}/${id}/200`);
    return response;
  }; 

  const getRandomGrayscale = () => {
    const response = axios.get(urlGetGrayscale);
    return response;
  }; 

  return {
    getAll,
    getById,
    getRandomGrayscale //Deberás retornar el método para que puedas exportarlo
  }
}