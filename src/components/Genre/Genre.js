
import css from './genre.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../redux";

const Genre = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(genresActions.getAllGenres())
    },[])

    return (
        <div>
            {
                genres?.genres?.map(genre =>
                    <div key={genre.id}>
                        <input
                            type="checkbox"
                            value={genre.name}
                            name={genre.name}
                            onClick={()=> dispatch(genresActions.getAllGenres(genre.id))}
                        />
                        {genre.name}
                </div>)
            }
        </div>
    )
}
export {Genre}