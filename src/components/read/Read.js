import { useState } from 'react';
import { FavoriteService } from '../../services/FavoriteService';
import Update from '../../components/update/Update';

const Read = ({picture, onDelete }) => {

  const [selectedPicture, setSelectedPicture] = useState(null);

  const handleOnClickDelete = (pictureId) => {
    
    const service = FavoriteService();
    service.deletePicture(pictureId)
      .then(response => {
        onDelete(pictureId);
      })
      .catch(error => console.log(error));
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
      <p>Autor: {picture.author}</p>
      <img src={picture.download_url} alt="" />
      <div>
        <button onClick={() => handleOnClickDelete(picture.id)}>Eliminar</button>
        <button onClick={() => handleOnClickEdit(picture.id, picture.author, picture.download_url)}>Editar</button>
      </div>
      {selectedPicture && (
        <Update
         id={selectedPicture.id}
         name={selectedPicture.name}
         url={selectedPicture.url}
         />
        )}
    </div>
  )
};

export default Read;
