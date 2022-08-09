import { useState, useEffect } from 'react';
import { get } from '../utils/clientHttps';

export const useMovies = (search) => {
    
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        const searchURL = search 
        ? `/search/movie?query=${search}&page=${page}` 
        : `/discover/movie?page=${page}`;
        get(searchURL).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
        });
    }, [page, search]);
  
    return [movies, setPage, hasMore];
}
