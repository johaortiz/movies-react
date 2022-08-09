import styles from '../styles/Card.module.css';
import { Link } from 'react-router-dom';
import No_image_available from '../assets/No_image_available.png';
import { getImage } from '../utils/clientHttps';

export function Card( {movie} ) {

    const imageUrl = getImage("300", movie);

    return <li className={styles.card}>
            <Link to={`movie/${movie.id}`}>
                <img 
                    width={230} 
                    height={345} 
                    className={styles.cardImage} 
                    src={imageUrl.length > 36 ? imageUrl : No_image_available } 
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </li>;
}