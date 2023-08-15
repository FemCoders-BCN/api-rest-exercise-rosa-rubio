import React, { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PictureId.css';

export default function PictureId() {
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
    <div>
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
      <div className="image-container">
        {cardById && <img src={cardById} alt="" />}
      </div>
    </div>
)}
