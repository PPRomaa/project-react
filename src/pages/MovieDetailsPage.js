import {useLocation} from "react-router-dom";
import css from '../components/MoviesList/movieList.module.css'
import {Rating} from "../components/StarRating/Ratings";

const MovieDetailsPage = () => {

    const {state} = useLocation();
    console.log(state)

    return (
        <div className={css.detailBlock}>
            <div className={css.details}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${state.poster_path}`} alt="poster_path"/>
                </div>
                <div className={css.detailInfo}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w400${state.backdrop_path}`} alt="poster_path"/>                    </div>
                    <div>
                    <div>
                        <span>{state.title}</span>
                    </div>
                        <p>Rating:{state.vote_average}</p>
                        <Rating rating={state.vote_average}/>
                    </div>
                    <div>
                        <span>{state.overview}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {
    MovieDetailsPage
}