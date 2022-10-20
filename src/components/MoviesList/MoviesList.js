import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './movieList.module.css'
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const {movies:{results}} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const [query,setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAllMovies({page}))
    }, [page,dispatch])

    const prevPage = () => {
        const prev = page - 1;
        if (prev >= 1) {
            setQuery({page:`${prev}`})
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next <= 500) {
            setQuery({page:`${next}`})
        }
    }

    return (
        <div className={css.blockMovie}>
            {results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
        </div>
    );
};
export {MoviesList}