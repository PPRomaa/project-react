import {Link} from "react-router-dom";

import {Rating} from "../StarRating/Ratings";
import css from '../MoviesList/movieList.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MoviesListCard = ({movie}) => {


    return (
        <div className={css.smallBlock}>
            <Link to={movie.id.toString()} state={movie}>
                <GenreBadge movie={movie}/>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="poster_path"/>
                </div>
            </Link>
            <div>
                <span>{movie.title}</span>
                <Rating rating={movie.vote_average}/>
            </div>
        </div>
    );
};
export {MoviesListCard}