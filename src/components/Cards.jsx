//import moviesList from '../movies.json'
import { Card } from './Card'
import styles from '../styles/Cards.module.css';
import { useEffect, useState } from 'react';
import { get } from '../utils/clientHttps';
export function Cards(){
    const [movies, setMovies] = useState([]);
    
    useEffect(()=> {
        get(`/discover/movie`).then((data) => {
            setMovies(data.results);
        });
    }, []);

    return <>
        <ul className={styles.cardsGrid} >
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    </>
}