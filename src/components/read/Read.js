import React, { useState, useEffect } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import Update from '../../components/update/Update';

const Read = () => {
  const [pictures, setPictures] = useState([]);
  const [selectedPicture, setSelectedPicture] = useState(null);

  useEffect(() => {
    const service = FavoriteService();
    service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleOnClickDelete = (pictureId) => {
    const service = FavoriteService();
    service.deletePicture(pictureId)
      .then(response => console.log(response))
      .catch(error => console.log(error));

      setPictures(prevPictures => prevPictures.filter(picture => picture.id !== pictureId));  
  };

  const handleOnClickEdit = (pictureId, authorName, imageURL) => {
    setSelectedPicture({
      id: pictureId,
      name: authorName,
      url: imageURL
    });
  };

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
              <button onClick={() => handleOnClickEdit(picture.id, picture.author, picture.download_url)}>Editar</button>
            </div>
          </div>
        ))}
      </div>
      {selectedPicture && (
        <Update
          id={selectedPicture.id}
          name={selectedPicture.name}
          url={selectedPicture.url}
        />
      )}
    </div>
  );
};

export default Read;
