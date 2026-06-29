import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

export const Sidebar: React.FC = () => {
    return (
        <aside className={style.sidebar}>
            <div>
                Workspace Flow
            </div>
            <nav className={style.navLinks}>
                <NavLink
                    to='/'
                    className={({ isActive }) => `${style.link} ${isActive ? style.activeLink : ''}`}
                >
                    Главная
                </NavLink>
                <NavLink
                    to='/booking'
                    className={({ isActive }) => `${style.link} ${isActive ? style.activeLink : ''}`}
                >
                    Бронирование
                </NavLink>
                <NavLink
                    to='/profile'
                    className={({ isActive }) => `${style.link} ${isActive ? style.activeLink : ''}`}
                >
                    Профиль
                </NavLink>
            </nav>
        </aside>
    )
}