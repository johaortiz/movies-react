import React from 'react'
import { useSearch } from '../hooks/useSearch'



export const SearchBar = () => {
    const  [searchBar, handleChange ] = useSearch('');

  return (
    <div>
        <input type="text" placeholder="Search a movie..." value={searchBar} onChange={(e)=>{handleChange(e)}} />
    </div>
  )
}
