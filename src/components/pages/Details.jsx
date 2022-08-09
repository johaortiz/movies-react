import { useEffect, useState } from 'react';
import styles from '../../styles/Details.module.css'
import No_image_available from '../../assets/No_image_available.png';
import { useDetails } from '../../hooks/useDetails';

export function Details() {

  const [movie, imageUrl] = useDetails();

  
  return <>
    { movie ? <div className={styles.detailsContainer}>
      <img className={`${styles.columns} ${styles.image}`} src={imageUrl.length > 36 ? imageUrl : No_image_available} alt={movie.title} />
      <div className={`${styles.columns} ${styles.text}`}>
        <p><strong>Title:</strong> {movie.title}</p>
        <p><strong>Genres</strong> {movie.genres.map((genre) => genre.name).join(' - ')}</p>
        <p><strong>Synopsis:</strong> {movie.overview}</p>
      </div>
    </div> : <div>A</div> }

  </>
}