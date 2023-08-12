import React, { useState } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import './PictureGrayScale.css';

export default function PictureGrayScale() {
  const [grayScaleImg, setGrayScaleImg] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const service = LoremPicsumService();
    service.getRandomGrayscale()
      .then(response => {
        setGrayScaleImg(response.request.responseURL);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <button type="submit">Obtener imagen</button>
      </form>
      {grayScaleImg && <img src={grayScaleImg} alt="Imagen en escala de grises" />}
    </div>
  )
}
