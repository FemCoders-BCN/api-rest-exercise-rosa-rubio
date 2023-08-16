import { useState } from 'react';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import Navbar from '../../components/navbar/Navbar'
import PictureGrayScale from '../../components/pictureGrayScale/PictureGrayScale'

function GrayscalePage() {

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
    <main>
        <Navbar/>
        <div>
          <p>Click the button below to get a random gray scale image:</p>
          <form onSubmit={handleFormSubmit}>
            <button type="submit">Click me!</button>
          </form>
        </div>
        <PictureGrayScale image={grayScaleImg}/>
    </main>
  )
}

export default GrayscalePage