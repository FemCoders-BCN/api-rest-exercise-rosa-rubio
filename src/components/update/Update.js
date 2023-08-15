import { FavoriteService } from '../../services/FavoriteService';

export default function Update(props) {

    const handleFormSubmit = (event) => {
        //  event.preventDefault();
         const name = event.target.elements.author.value;
         const url = event.target.elements.url.value;

         const service = FavoriteService();
         service.updatePictures(props.id, name, url);

        //  window.location.reload();
    }

    return (
        <>
          <h1>Edit your picture:</h1>
          <center>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="author">Author:</label>
              <input type="text" id="author" defaultValue={props.name} />
              <label htmlFor="url">Image URL:</label>
              <input type="url" id="url" defaultValue={props.url} />
              <button type="submit">Editar</button>
            </form>
          </center>
        </>
      );
    }
    
    
    
    
    
    