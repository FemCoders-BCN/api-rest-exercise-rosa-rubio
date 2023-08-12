import React from 'react'
import { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import Update from '../../components/update/Update';

const Read = () => {
  
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
      const service =  FavoriteService();
      
      service.getAll()
        .then(response => setPictures(response.data))
        .catch(error => console.log(error))
  }, []);

  const handleOnClickDelete = (pictureId) => {
    
    const service = FavoriteService();
    service.deletePicture(pictureId)
      .then(response => console.log(pictureId))
      .catch(error => console.log(error))

      window.location.reload();
  }

  const handleOnClickEdit = (pictureId) => {
    <Update
      id = {pictureId} 
    />
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
            <button onClick={() => handleOnClickDelete(picture.id)}>Eliminar</button>
            <button onClick={() => handleOnClickEdit(picture.id)}>Editar</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Read;