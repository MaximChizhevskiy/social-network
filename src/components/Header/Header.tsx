import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {HeaderContainerPropsType} from "./HeaderContainer";

const Header = (props: HeaderContainerPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://line25.com/wp-content/uploads/2020/12/cover-image.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2'
                alt='logo'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;