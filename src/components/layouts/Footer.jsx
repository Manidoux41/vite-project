import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
        <nav class="wrapper">
            <h2>ohmyfood</h2>        
            <ul>
                <li>
                    <i class="fa-solid fa-utensils"></i>
                    <NavLink to="/">Proposer un restaurant</NavLink>
                </li>
                <li>
                    <i class="fa-solid fa-handshake-angle"></i>
                    <NavLink to="/">Devenir partenaire</NavLink>
                </li>
                <li>
                    <NavLink to="/">Mentions légales</NavLink>
                </li>
                <li>
                    <NavLink to="/">Contact</NavLink>
                </li>
            </ul>
        </nav>
    </footer>
    );
};

export default Footer;