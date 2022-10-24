import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";

import css from './movieList.module.css'
import {movieActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {Genre} from "../Genre/Genre";

const MoviesList = () => {
    const {movies: {results},currentGenre} = useSelector(state => state.movies);
    useSelector(state => state.genres);

    const dispatch = useDispatch();


    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    useEffect(() => {
        // dispatch(movieActions.getAllMovies({page}))
        if (!currentGenre) {
            dispatch(movieActions.getAllMovies({page}))
        } else {
            dispatch(movieActions.findGenre({currentGenre}))
        }
    }, [page, dispatch,currentGenre])

    const prevPage = () => {
        const prev = page - 1;
        if (prev >= 1) {
            setQuery({page: `${prev}`})
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    const nextPage = () => {
        const next = +page + 1;
        if (next <= 500) {
            setQuery({page: `${next}`})
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    return (
        <div className={css.blockMovies}>
            <div className={css.blockGenre}>
                <Genre/>
            </div>
            <div className={css.blockMovie}>
                {results?.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.bottom}>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
            </div>
        </div>
    );
};
export {MoviesList}