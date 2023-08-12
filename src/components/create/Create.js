// import { useState} from 'react';
import { FavoriteService } from '../../services/FavoriteService';

export default function Create() {

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.author.value;
        const url = event.target.elements.url.value;

        const service = FavoriteService();
        service.postPictures(name, url);
  }

    return (
        <>
            <h1>Upload a new picture:</h1>
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
