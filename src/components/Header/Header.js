import {NavLink} from "react-router-dom";
import {useColorMode} from "theme-ui";

import css from './header.module.css'

const Header = () => {
    const [colorMode,setColorMode] = useColorMode();
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
            <div>
                <span>burger</span>
            </div>
            <form>
                <input type="text" placeholder={'find movie'}/>
            </form>
            <div>
                <label>
                    <button onClick={()=>{setColorMode(colorMode === 'light' ? 'Dark' : 'light')}}>
                        {colorMode === 'light' ? 'Dark' : 'Light'}
                    </button>
                    <span></span>
                </label>
            </div>
            <div>
                <h3>Name</h3>
            </div>
        </div>
    );
};
export {Header}