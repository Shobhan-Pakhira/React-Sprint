import React from 'react';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
import LandingPage from './components/LandingPage/LandingPage';
import CardPage from './components/CardPage/CardPage';
import FeaturePage from './components/FeaturePage/FeaturePage';

function App() {
  return (
    <>
      <ScrollAnimation/>
      <FeatureDisplay/>
      <LandingPage />
      <CardPage />
      <FeaturePage />
    </>
  );
}

export default App;
