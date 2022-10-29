import React from 'react';
import image4 from '../assets/images/restaurants/image4.jpg'
import HeaderMenu from '../components/layouts/HeaderMenu';

const Menu4 = () => {
    return (
        <>
            <HeaderMenu />
            <main>
                <section id="container">
                <div className="imageheading">
                    <img src={image4} alt="Le délice des sens" />
                </div>
                <div className="menuContainer wrapper">
                    <div className="title">
                        <h2>Le délice des sens</h2>
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
                                    <h4 className="menu__name">Tartare de thon</h4>
                                    <p>assaisonné au yuzu</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">25€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Bouchée de homard croustillant</h4>
                                    <p>Et sa farandole de petits légumes</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Velouté de cèpes</h4>
                                    <p>Aux truffes</p>
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
                                    <h4 className="menu__name">Poulet rôti aux herbes de provence</h4>
                                    <p>Et sa crème de truffe</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">40€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Langouste rôtie</h4>
                                    <p>Et ses légumes de saison</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Côte de boeuf angus</h4>
                                    <p>Et sa purée de panais</p>
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
                                    <h4 className="menu__name">Farandole de desserts</h4>
                                    <p>Du chef</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">18€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Crème brûlée</h4>
                                    <p>Revisitée</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">22€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Tiramisu</h4>
                                    <p>A la noisette</p>
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

export default Menu4;