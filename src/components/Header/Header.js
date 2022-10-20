import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
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
            <div>
                <input type="text" placeholder={'find movie'}/>
            </div>
            <div>
                <label>
                    <input type="checkbox"/>
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