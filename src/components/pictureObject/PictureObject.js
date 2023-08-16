import React from 'react';

function PictureObject({picture}) {
  return (
    <div>
      <p>ID de imagen: {picture.id}</p>
      <p>Autor: {picture.author}</p>
      <img src={picture.download_url} alt="" />
    </div>
  )
}
export default PictureObject