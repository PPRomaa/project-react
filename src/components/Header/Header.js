import {NavLink} from "react-router-dom";
import {useColorMode} from "theme-ui";

import css from './header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {SearchMovie} from "../Search/SearchMovie";

const Header = () => {
    const [colorMode, setColorMode] = useColorMode();


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
            <SearchMovie/>
            <div>
                <label>
                    <button onClick={() => {
                        setColorMode(colorMode === 'light' ? 'Dark' : 'light')
                    }}>
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