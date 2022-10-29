import React from 'react';
import image1 from '../assets/images/restaurants/image1.jpg'

const Menu1 = () => {
    return (
        <>
            <HeaderMenu />
            <main>
                <section id="container">
                <div className="imageheading">
                    <img src={ image1 } alt="La palette du gout" />
                </div>
                <div className="menuContainer wrapper">
                    <div className="title">
                        <h2>La palette du goût</h2>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                    </div>
                    <div className="contentMenu">
                        <div className="categorie__menu">
                            <h3 className="categorie__menu--title">
                                Entrées
                            </h3>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Fricassé d'escargot</h4>
                                    <p>Au piment d'espelette</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">25€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Foie gras de canard mi-cuit</h4>
                                    <p>Et ses copeaux de truffe noire</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Oeuf au plat</h4>
                                    <p>Assaisonné à la truffe sur lit de...</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">20€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="categorie__menu">
                            <h3 className="categorie__menu--title">
                                Plats
                            </h3>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Filet de boeuf aux herbes</h4>
                                    <p>Accompagné de sa ribambelle de légu...</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">40€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Parmentier de queue de boeuf</h4>
                                    <p>A la truffe noire sur sa purée de panais</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Filet de Turbot</h4>
                                    <p>Aux agrumes</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">44€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="categorie__menu">
                            <h3 className="categorie__menu--title">
                                Desserts
                            </h3>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Paris-Brest</h4>
                                    <p>Revisité</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">18€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Macaron au chocolat d'exception</h4>
                                    <p>Et glace à la vanille de Madagascar</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">22€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Mousse au chocolat</h4>
                                    <p>Au piment d'espelette et à la truffe noire</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">25€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn">Commander</div>
                </div>
            </section>
            </main>
        </>
    );
};

export default Menu1;