import {NavLink} from "react-router-dom";
import {useColorMode} from "theme-ui";

import css from './header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {SearchMovie} from "../Search/SearchMovie";

const Header = () => {
    const [colorMode, setColorMode] = useColorMode();


    return (
        <div className={css.headerBlock}>
            <NavLink to={'/'}>
                <span className={css.logo}>/MoVIE</span>
            </NavLink>
            <SearchMovie/>
            <div>
                <label>
                    <button className={css.toggle} onClick={() => {
                        setColorMode(colorMode === 'light' ? 'Dark' : 'light')
                    }}>
                        {colorMode === 'light' ? 'Dark☾' : 'Light☼'}
                    </button>
                </label>
            </div>
            <UserInfo/>
        </div>
    );
};
export {Header}