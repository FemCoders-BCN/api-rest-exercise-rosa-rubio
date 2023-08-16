export default function PictureId({id}) {

  return (
    <div>
      <div>
        {id && <img src={id} alt="" />}
      </div>
    </div>
)}
