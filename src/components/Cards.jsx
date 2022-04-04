import moviesList from '../movies.json'
import { Card } from './Card'
import styles from '../styles/Cards.module.css';
export function Cards(){
    return <>
        <ul className={styles.cardsGrid} >
            {moviesList.map((movie) => (
                <Card key={movie.id} movie={movie}/>
            ))}
        </ul>
    </>
}