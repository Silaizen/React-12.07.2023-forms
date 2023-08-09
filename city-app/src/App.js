import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CityInfo from './components/CityInfo';
import FamousLandmark from './components/FamousLandmark';
import OtherLandmarks from './components/OtherLandmarks';
import CityPhotos from './components/CityPhotos';
import PhotoUploadForm from './PhotoUploadForm';
const App = () => {
  return (
    <Router>
      <div>
        <h1>Мій додаток про місто</h1>
        <Routes>
          <Route exact path="/" element={<CityInfo />} />
          <Route path="/famous-landmark" element={<FamousLandmark />} />
          <Route path="/other-landmarks" element={<OtherLandmarks />} />
          <Route path="/city-photos" element={<CityPhotos />} />
        </Routes>
        <PhotoUploadForm />
      </div>
    </Router>
  );
}

export default App;





