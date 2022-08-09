import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchQuery } from "./useSearchQuery";


export const useSearch = (e) => {
    const navigate = useNavigate();
    const [searchBar, setSearchBar] = useState('');
    const debouncedValue = useSearchQuery();

    useEffect(() => {
        if(debouncedValue === null) setSearchBar('');
    }, [debouncedValue]);


    function handleChange(e) {
        e.preventDefault();

        //to input
        const text = e.target.value;
        setSearchBar(text);

        //to navigate
        const finallyText = text.split(' ').join('+');
        !text ? navigate('/') : navigate(`/?search=${finallyText}`);
    }

    return  [ searchBar, handleChange ];

}
