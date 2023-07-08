import React from 'react'
import { LoremPicsumService } from '../../services/LoremPicsumService'
import { useState, useEffect } from 'react'

export default function PictureId() {

    const [cardById, setCardById] = useState([]);
    const id = prompt("Introduce un id de imagen: ");
    const size = prompt("Introduce un tamaño en píxeles: ");

    useEffect(() => {
        const service = LoremPicsumService();

        service.getById(id, size)
        .then (response => setCardById(response.data))
        .catch (error => console.log(error))
    }, []);

  return (
    <div>
        <img src={cardById.url_download} /> 
    </div>
  )
}
