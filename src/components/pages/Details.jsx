import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../../styles/Details.module.css'
import { get } from '../../utils/clientHttps';
export function Details(){
    
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + id).then((data) => {
      setMovie(data);
    });
  }, [id]);

  if (!movie) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    return <>
        <div className={styles.detailsContainer}>
            <img className={`${styles.columns} ${styles.image}`} src={imageUrl} alt={movie.title} />
            <div className={`${styles.columns} ${styles.text}`}>
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Genres</strong> {movie.genres.map((genre) => genre.name).join(' - ')}</p>
                <p><strong>Synopsis:</strong> {movie.overview}</p>
            </div>
        </div>
    </>
}