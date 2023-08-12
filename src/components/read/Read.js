import React from 'react'
import { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';


const Read = () => {
  
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
      const service =  FavoriteService();
      
      service.getAll()
        .then(response => setPictures(response.data))
        .catch(error => console.log(error))
  }, []);
  
  return (
    <div>
      <h1>My pictures</h1>
      <div className="pictures-container">
        {pictures.map((picture) => (
        <div key={picture.id}>
          <div>ID: {picture.id}</div>
          <div>Author: {picture.author}</div>
          <img src={picture.download_url} alt={picture.author} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default Read;