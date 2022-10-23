import StarRatings from "react-star-ratings/build/star-ratings";
import css from '../MoviesList/movieList.module.css'

const Rating = ({rating}) => {
    return (
        <div className={css.stars}>
            <StarRatings
                classname={'a'}
                rating={rating}
                starRatedColor="orange"
                numberOfStars={10}
                name='rating'
                starDimension="20px"
                starSpacing="3px"
            />
        </div>

    );
};

export {Rating};