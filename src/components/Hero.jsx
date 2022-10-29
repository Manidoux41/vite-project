import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="hero">
            <h2>Réservez le menu qui vous convient</h2>
            <p>Découvrez des restaurants d'exception,
            sélectionnés par nos soins</p>
            <NavLink to="/" className="btn">Explorer nos restaurants</NavLink>

        </section>
    );
};

export default Hero;