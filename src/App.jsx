import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import Menu1 from './pages/Menu1';
import Menu2 from './pages/Menu2'
import Menu3 from './pages/Menu3'
import Menu4 from './pages/Menu4'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/menu1' element={ <Menu1 />} />
        <Route path='/menu2' element={ <Menu2 />} />
        <Route path='/menu3' element={ <Menu3 />} />
        <Route path='/menu4' element={ <Menu4 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;