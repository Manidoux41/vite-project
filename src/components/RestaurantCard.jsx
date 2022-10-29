import image1 from '../assets/images/restaurants/image1.jpg';
import image2 from '../assets/images/restaurants/image2.jpg';
import image3 from '../assets/images/restaurants/image3.jpg';
import image4 from '../assets/images/restaurants/image4.jpg';
import { NavLink } from 'react-router-dom';

const RestaurantCard = () => {
    return (
        <section id="restaurantCards">
            <div className="restaurantCardsTitle wrapper">
                <h3>Restaurants</h3>
            </div>
            <div className="cards_container wrapper">
                <article className="card">
                    <NavLink to="menu1" className="image">
                        <span className="new">Nouveau</span>
                        <img src={image1} alt="La palette du gout" />
                    </NavLink>
                    <div className="content">
                        <div className="contentText">
                            <h4>La Palette du goût</h4>
                            <p>Ménilmontant</p>
                        </div>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <NavLink to="menu2" className="image">
                        <span className="new">Nouveau</span>
                        <img src={image2} alt="La note enchantée" />
                    </NavLink>
                    <div className="content">
                        <div className="contentText">
                            <h4>La note enchantée</h4>
                            <p>Charonne</p>
                        </div>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <NavLink to="menu3" className="image">
                        <img src={image3} alt="A la Française" />
                    </NavLink>
                    <div className="content">
                        <div className="contentText">
                            <h4>A la française</h4>
                            <p>Cité Rouge</p>
                        </div>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                </article>
                <article className="card">
                    <NavLink to="menu4" className="image">
                        <img src={image4} alt="Le délice des sens" />
                    </NavLink>
                    <div className="content">
                        <div className="contentText">
                            <h4>Le délice des sens</h4>
                            <p>Folie-Méricourt</p>
                        </div>
                        <div className="like fa-stack">
                            <i className="fa-solid fa-heart fa-stack-1x"></i>
                            <i className="fa-regular fa-heart fa-stack-1x"></i>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default RestaurantCard;