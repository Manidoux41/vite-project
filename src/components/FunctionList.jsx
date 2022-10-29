import React from 'react';

const FunctionList = () => {
    return (
        <section id="functionsList">
            <div className="functionListCardsTitle wrapper">
                <h3>Fonctionnement</h3>
            </div>
            <ol className="containerList wrapper">
                <li>
                    <span className="icon">
                        <i className="fa-solid fa-mobile-screen-button"></i>
                    </span>
                    <a href="#restaurantCards"> Choisissez un restaurant</a>
                </li>
                <li>
                    <span className="icon">
                        <i className="fa-solid fa-list"></i>
                    </span>
                    <a href="#restaurantCards"> Composez votre menu</a>
                </li>
                <li>
                    <span className="icon">
                        <i className="fa-solid fa-store"></i>
                    </span>
                    <a href="#restaurantCards"> Dégustez au restaurant</a>
                </li>
            </ol>
        </section>
    );
};

export default FunctionList;