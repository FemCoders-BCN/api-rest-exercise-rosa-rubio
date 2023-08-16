export default function PictureGrayScale({image}) {

  return (
    <div>
      {image && <img src={image} alt="Imagen en escala de grises" />}
    </div>
  )
}
