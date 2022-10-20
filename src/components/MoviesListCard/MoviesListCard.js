import {Link} from "react-router-dom";

import css from '../MoviesList/movieList.module.css'

const MoviesListCard = ({movie}) => {

    return (
        <div className={css.smallBlock}>
            <Link to={movie.id.toString()} state={movie}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="poster_path"/>
                </div>
                <div>
                    <span>{movie.title}</span>
                </div>
            </Link>
        </div>
    );
};
export {MoviesListCard}