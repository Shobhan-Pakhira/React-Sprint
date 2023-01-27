import React from 'react';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
import LandingPage from './components/LandingPage/LandingPage';
import CardPage from './components/CardPage/CardPage';
import FeaturePage from './components/FeaturePage/FeaturePage';
import SupportFeature from './components/SupportFeature/SupportFeature'
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <ScrollAnimation/>
      <FeatureDisplay/>
      <LandingPage />
      <CardPage />
      <FeaturePage />
      {/* <SupportFeature/>
      <HomePage/>
      <Footer/> */}
    </>
  );
}

export default App;
