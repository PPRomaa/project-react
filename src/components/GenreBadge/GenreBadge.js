import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {genresActions} from "../../redux";
import css from '../Genre/genre.module.css'


const GenreBadge = ({movie}) => {

    const [genres,setGenres] = useState([]);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAllGenres()).then(({payload})=>setGenres(payload.genres))
    },[dispatch])

    const genresFilter = genres.filter(genre =>movie.genre_ids.includes(genre.id)).map(data=>data.name).slice(0,2);

    return (
        <div className={css.genreBadge}>
            {
                genresFilter.map((item,index)=>(<div key={index}>{item}</div>))
            }
        </div>
    );
};
export {GenreBadge}