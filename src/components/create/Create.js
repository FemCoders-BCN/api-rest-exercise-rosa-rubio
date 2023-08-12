import { useEffect } from 'react';
import { postPictures } from '../../services/FavoriteService';

export default function Create() {
    // const [postData, setPostData] = useState([]);
    
    useEffect(() => {
        postPictures()
        .then(response => console.log(response))
        .catch(error => console.log(error));

    }, [])

}
