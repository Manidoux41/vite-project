import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <header>
        <div className="heading wrapper">
            <NavLink to="/" className="returnHome">
                <i className="fa-solid fa-arrow-left"></i>
            </NavLink>
            <h1>ohmyfood</h1>
        </div>
    </header>
    );
};

export default HeaderMenu;