import './App.css';
import React from 'react';
import Hero from './components/Hero';
import SecondPage from './components/Secondpage';
import ProductDisplay from './components/ProductDisplay';
import ShowHide from './components/ShowHide';
import LandingPage from './components/LandingPage';
import CardPage from './components/CardPage';
import FeaturePage from './components/FeaturePage';


function App() {
  return (
    <>
      <Hero/>
      <SecondPage/>
      {/* <ProductDisplay/> */}
      {/* <ShowHide /> */}
      <LandingPage />
      <CardPage />
      <FeaturePage />
    </>
  );
}

export default App;
