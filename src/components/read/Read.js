import React from 'react'
import { useState, useEffect } from 'react';
import  getAll from '../../services/FavoriteService';


export default function Read() {
  
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
    getAll()
    .then(response => setPictures(response.data))
    .catch(error => console.log(error))
  }, []);
  
  return (
    <div>
      <h1>My pictures</h1>
      {pictures.map((picture) => (
        <div key={picture.id}>
          <div>ID: {picture.id}</div>
          <div>Author: {picture.author}</div>
          <img src={picture.download_url} alt={picture.author} />
        </div>
      ))}
    </div>
  );
}
