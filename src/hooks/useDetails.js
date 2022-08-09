import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { get, getImage } from '../utils/clientHttps';



export const useDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState('');

    useEffect(() => {
        get("/movie/" + id).then((data) => {
            setMovie(data);
        });
    }, [id]);

    const imageUrl = getImage("500", movie);

    return [movie, imageUrl];
}
