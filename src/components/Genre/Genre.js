import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {genresActions, movieActions} from "../../redux";
import css from './genre.module.css'


const Genre = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genresActions.getAllGenres())
    },[])

    const handleSubmit = (id) => {
        dispatch(movieActions.selected(id));


    }

    return (
        <div className={css.genre}>
            {
                genres?.genres?.map(genre =>
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            value={genre.name}
                            name={genre.name}
                            onClick={()=> handleSubmit(genre.id)}
                        />
                        {genre.name}
                </div>)
            }
        </div>
    )
}
export {Genre}