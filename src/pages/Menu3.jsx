import React from 'react';
import image3 from '../assets/images/restaurants/image3.jpg'
import HeaderMenu from '../components/layouts/HeaderMenu';

const Menu3 = () => {
    return (
        <>
            <HeaderMenu />
            <main>
                <section id="container">
                <div className="imageheading">
                    <img src={image3} alt="A la Française" />
                </div>
                <div className="menuContainer wrapper">
                    <div className="title">
                        <h2>A la française</h2>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                    <div className="contentMenu">
                        <div className="categorie__menu">
                            <h3 className="categorie__menu--title">
                                Entrées
                            </h3>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Tartare de poulpe acidulé</h4>
                                    <p>Aux zests d'orange</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">25€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Velouté de légumes d'antan</h4>
                                    <p>Carotte, panais, topinambour</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Soupe à l'oignon</h4>
                                    <p>Revisitée</p>
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
                                    <h4 className="menu__name">Coquilles Saint-Jacques</h4>
                                    <p>Accompagnées d'une purée de panais</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">40€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Magret de canard</h4>
                                    <p>Et parmentier de pommes de terres</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Pigeonneau d'Ille-et-Vilaine</h4>
                                    <p>Sur son lit de gnocchis au légumes</p>
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
                                    <h4 className="menu__name">Pétales de violettes glacés</h4>
                                    <p>Et purée de noisettes</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">18€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Fondant au chocolat</h4>
                                    <p>Revisité</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">22€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Millefeuille croustillant</h4>
                                    <p>Myrtilles et pâtes d'amande</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">23€</span>
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

export default Menu3;