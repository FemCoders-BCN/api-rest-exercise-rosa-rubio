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

  const handleOnClickDelete = () => {

  }

  const handleOnClickEdit = () => {

  }
  
  return (
    <div>
      <h1>My pictures</h1>
      <div className="pictures-container">
        {pictures.map((picture) => (
        <div key={picture.id}>
          <div>ID: {picture.id}</div>
          <div>Author: {picture.author}</div>
          <img src={picture.download_url} alt={picture.author} />
          <div>
            <button onClick={handleOnClickDelete}>Eliminar</button>
            <button onClick={handleOnClickEdit}>Editar</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Read;