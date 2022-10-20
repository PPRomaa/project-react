import {useLocation} from "react-router-dom";

const MovieDetailsPage = () => {

    const {state} = useLocation();
    console.log(state)

    return (
        <div>
            <div>
                <div>
                    <span>{state.title}</span>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w400${state.poster_path}`} alt="poster_path"/>
                </div>
                <div>
                    {state.vote_average}
                </div>
                <div>
                    <span>{state.overview}</span>
                </div>
            </div>
        </div>
    )
}

export {
    MovieDetailsPage
}