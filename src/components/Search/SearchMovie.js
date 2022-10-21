import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";


const SearchMovie = () => {
    const [query, setQuery] = useState('sup');
    const dispatch = useDispatch();

    // const search = (e) => {
    //     e.preventDefault()
    //     if (query) {
    //         dispatch(movieActions.searchMovie(query))
    //     }
    // }

    useEffect(()=>{
        if (query){
            dispatch(movieActions.searchMovie(query))
        }
    },[dispatch,query])

    const find = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActions.searchMovie(query))
        }else dispatch(movieActions.getAllMovies())
        setQuery('')
    }

    return(
        <>
            <form>
                <input type="text"
                       placeholder={'find movie'}
                       onChange={(e) => setQuery(e.target.value)}
                       value={query}/>
                <button onClick={find}>Find</button>
            </form>
        </>
    )
}
export {
    SearchMovie
}