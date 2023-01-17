import './App.css';
import React from 'react';
import Hero from './components/Hero';
import SecondPage from './components/Secondpage';
import ProductDisplay from './components/ProductDisplay';
import ShowHide from './components/ShowHide';


function App() {
  return (
    <>
      <Hero/>
      <SecondPage/>
      <ProductDisplay/>
      <ShowHide />
    </>
  );
}

export default App;
