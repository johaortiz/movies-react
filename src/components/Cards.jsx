import { Card } from './Card'
import styles from '../styles/Cards.module.css';
import { useMovies } from '../hooks/useMovies';
import InfiniteScroll from 'react-infinite-scroll-component';



export function Cards({ search }) {

    const [movies, setPage, hasMore] = useMovies(search);


    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<h4>Loading...</h4>} >

            <ul className={styles.cardsGrid} >
                {movies?.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    )
}
