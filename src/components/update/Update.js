import { FavoriteService } from '../../services/FavoriteService';

export default function Update(props) {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.author.value;
        const url = event.target.elements.url.value;

        const service = FavoriteService();
        service.postPictures(name, url);

        window.location.reload();
  }

    return (
        <>
            <h1>Edit your picture:</h1>
            <center>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author"></input>
                <label htmlFor="url">Image URL:</label>
                <input type="url" id="url"></input>
                <button type="submit">Crear</button>
            </form>
            </center>
        </>
    )
}
