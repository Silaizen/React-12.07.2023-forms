import { Link } from 'react-router-dom';

const CityInfo = () => {
  return (
    <div>
      <h2>Інформація про місто</h2>
      {}
      <Link to="/famous-landmark">Перейти до найвідомішої пам'ятки міста</Link>
      {}
      <Link to="/other-landmarks">Перейти до інших пам'яток</Link>
      {}
      <Link to="/city-photos">Перейти до фотографій міста</Link>
    </div>
  );
}

export default CityInfo;