import React from 'react';
import FormHeader from '../components/FormHeader';
import FunctionList from '../components/FunctionList';
import Hero from '../components/Hero';
import Header from '../components/layouts/Header';
import Loader from '../components/Loader';
import RestaurantCard from '../components/RestaurantCard';

const Home = () => {
    return (
            <>
            <Loader />
            <Header />
            <main>
                <FormHeader />
                <Hero />
                <FunctionList />
                <RestaurantCard />                
            </main>      
            
            </>      
    );
};

export default Home;