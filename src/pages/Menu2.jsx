import React from 'react';
import image2 from '../assets/images/restaurants/image2.jpg'
import HeaderMenu from '../components/layouts/HeaderMenu';


const Menu2 = () => {
    return (
        <>
            <HeaderMenu />
            <main>
                <section id="container">
                <div className="imageheading">
                    <img src={image2} alt="La note enchantée"/>
                </div>
                <div className="menuContainer wrapper">
                    <div className="title">
                        <h2>La note enchantée</h2>
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
                                    <h4 className="menu__name">Ravioles de foie gras</h4>
                                    <p>Accompagnés de leur crème à la truffe</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">25€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Caviar osciètre</h4>
                                    <p>Sur blini à la farine de blé noir</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Homard et espuma de..</h4>
                                    <p>Mariné aux zets d'orange</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">20€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Foie gras de canard cuit entier</h4>
                                    <p>Confiture de figue et pain toasté</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
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
                                    <h4 className="menu__name">Noix de coquilles Saint-Jacques</h4>
                                    <p>Sur lit de purée de céleri-rave</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">40€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Langoustine poêlée</h4>
                                    <p>Purée de patate douce</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">35€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Mijoté de queue de boeuf</h4>
                                    <p>Et riz sauvage aux zests de citron</p>
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
                                    <h4 className="menu__name">Macaron noisette et chocolat</h4>
                                    <p>Glace au caramel brun et sel de Guérande</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">18€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Baba au rhum revisité</h4>
                                    <p>Avec son coulis de citron</p>
                                </div>
                                <div className="card__info">
                                    <span className="card__price">22€</span>
                                    <span className="card__check"><i className="fa-regular fa-circle-check"></i></span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card__content">
                                    <h4 className="menu__name">Tarte au citron meringuée</h4>
                                    <p>Destructurée</p>
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

export default Menu2;