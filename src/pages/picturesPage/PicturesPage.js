import { useState, useEffect } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import Navbar from '../../components/navbar/Navbar';
import PictureObject from '../../components/pictureObject/PictureObject';
import '../../components/pictureObject/PictureObject.css';

function PicturesPage() {

    const [pictures, setPictures] = useState([]);
   
    useEffect(() => {  
      const service = LoremPicsumService();
      service.getAll()
      .then(response => setPictures(response.data))
      .catch(error => console.log(error))
    }, []);
  

  return (
    <main>
        <Navbar/>
        <div className="pictures-container">
          {pictures.map((picture, index) => (<PictureObject picture={picture} key={index}/>))}
        </div>
    </main>
  )
}

export default PicturesPage