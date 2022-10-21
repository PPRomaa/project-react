import {NavLink} from "react-router-dom";
import {useColorMode} from "theme-ui";

import css from './header.module.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {movieActions} from "../../redux";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    const [colorMode,setColorMode] = useColorMode();

    const [query,setQuery] = useState('');
    const dispatch = useDispatch();

    const search = (e) => {
        e.preventDefault()
        if (query){
            dispatch(movieActions.searchMovie(query))
        }else dispatch(movieActions.getAllMovies())
    }
    const find = (e) => {
        e.preventDefault()
        if (query){
            dispatch(movieActions.searchMovie(query))
        }
        setQuery('')
    }

    return (
        <div className={css.headerBlock}>
            {/*<div>*/}
            {/*    <img src="/" alt="photo"/>*/}
            {/*    <NavLink to={'/'}>All movies</NavLink>*/}
            {/*</div>*/}

            <NavLink to={'/'}>
                <img src="" alt=""/>
                <span>Logo</span>
            </NavLink>
            {/*<div>*/}

            {/*</div>*/}
            <form onChange={search}>
                <input type="text" placeholder={'find movie'} onChange={(e)=>setQuery(e.target.value)} value={query}/>
                <button onClick={find}>Find</button>
            </form>
            <div>
                <label>
                    <button onClick={()=>{setColorMode(colorMode === 'light' ? 'Dark' : 'light')}}>
                        {colorMode === 'light' ? 'Dark' : 'Light'}
                    </button>
                    <span></span>
                </label>
            </div>
            <UserInfo/>
        </div>
    );
};
export {Header}