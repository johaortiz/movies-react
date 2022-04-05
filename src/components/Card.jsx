import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';

export function Card( {movie} ) {
    const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

    return <li className={styles.card}>
            <Link to={`movie/${movie.id}`}>
                <img 
                    width={230} 
                    height={345} 
                    className={styles.cardImage} 
                    src={imageUrl} 
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>;
}