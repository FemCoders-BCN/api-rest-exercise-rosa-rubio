import Navbar from '../../components/navbar/Navbar'
import { FavoriteService } from '../../services/FavoriteService';
import { useState, useEffect } from 'react'
import Read from '../../components/read/Read'
import Create from '../../components/create/Create'

function FavoritesPage() {

const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const service = FavoriteService();
    service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDeletePicture = (deletedPictureId) => {
    setPictures(prevPictures => prevPictures.filter(picture => picture.id !== deletedPictureId));
  };

  return (
    <main>
        <Navbar/>
        <Create />
        <h1>My pictures</h1>
        <div className="pictures-container">
          {pictures.map((picture, index) => (
          <Read 
            picture={picture}
            key={index}
            onDelete={handleDeletePicture}/>))}
        </div>
    </main>
  )
}

export default FavoritesPage