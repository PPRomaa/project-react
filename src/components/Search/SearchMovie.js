import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import css from './search.module.css'


const SearchMovie = () => {
    const [query, setQuery] = useState('');
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
        }else (dispatch(movieActions.getAllMovies()));
        setQuery('')
    }

    return(
        <>
            <form>
                <input type="text"
                       placeholder={'search movie...'}
                       onChange={(e) => setQuery(e.target.value)}
                       value={query}/>
                <button onClick={find} type={"submit"}>Find</button>
            </form>
        </>
    )
}
export {
    SearchMovie
}