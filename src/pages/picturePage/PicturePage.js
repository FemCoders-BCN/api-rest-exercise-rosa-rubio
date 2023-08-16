import { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import Navbar from '../../components/navbar/Navbar';
import PictureId from '../../components/pictureID/PictureId';

function PicturePage() {
  
  const [cardById, setCardById] = useState(null);
  const [imageId, setImageId] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setImageId(event.target.elements.imageId.value);
  }
  
  useEffect(() => {
    
    const service = LoremPicsumService();

    if (imageId) {
      service.getById(imageId)
        .then(response => {
          setCardById(response.request.responseURL)
        })
        .catch(error => console.log(error));
    }
  }, [imageId]);

  
  return (
    <main>
        <Navbar/>
        <div>
          <form onSubmit={handleFormSubmit}>
            <label>
            Image ID:
            <input type="text" name="imageId" required />
            </label>
            <br />
            <button type="submit">Render image</button>
          </form>
        </div>
      <PictureId id={cardById}/>  
    </main> 
  )
}

export default PicturePage