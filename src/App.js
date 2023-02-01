import React from 'react';
import ScrollCard from './components/ScrollCard/ScrollCard';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation';
import FeatureDisplay from './components/FeatureDisplay/FeatureDisplay';
// import LandingPage from './components/LandingPage/LandingPage';
// import CardPage from './components/CardPage/CardPage';
// import FeaturePage from './components/FeaturePage/FeaturePage';
// import SupportFeature from './components/SupportFeature/SupportFeature';
// import Footer from './components/Footer/Footer';
// import HomePage from './components/HomePage/HomePage'
// import Animation from './components/Animation/Animation';


function App() {
  return (
    <>
      <ScrollAnimation />
      <ScrollCard />
      <FeatureDisplay />
    </>  
  );
}

export default App;
