import React from 'react';
import classes from './Navbar.module.css';
import {Link, NavLink} from "react-router-dom";

console.log(classes);

const Navbar = () => {
    return  ( <nav className={ `${classes.nav} ${classes.item}`}>
            <div className={classes.active}>
                <NavLink to="/profile" className={({isActive}) =>`${isActive ? classes.active : ''}`}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" className={({isActive}) =>`${isActive ? classes.active : ''}`}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" className={({isActive}) =>`${isActive ? classes.active : ''}`}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={({isActive}) =>`${isActive ? classes.active : ''}`}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" className={({isActive}) =>`${isActive ? classes.active : ''}`}>Settings</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;