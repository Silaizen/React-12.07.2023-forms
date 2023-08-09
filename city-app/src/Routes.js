import React from 'react';
import { BrowserRouter as Router, Route, Routes as CityRoutes } from 'react-router-dom';
import CityInfo from './components/CityInfo';
import FamousLandmark from './components/FamousLandmark';
import OtherLandmarks from './components/OtherLandmarks';
import CityPhotos from './components/CityPhotos';

const Routes = () => {
  return (
    <Router>
  <CityRoutes>
    <Route exact path="/" element={<CityInfo />} />
    <Route path="/famous-landmark" element={<FamousLandmark />} />
    <Route path="/other-landmarks" element={<OtherLandmarks />} />
    <Route path="/city-photos" element={<CityPhotos />} />
    </CityRoutes>
</Router>
  );
};

export default Routes;