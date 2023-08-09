import React from 'react';

import { useLocation } from 'react-router-dom';

const OtherLandmarks = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = searchParams.get('type');

  return (
    <div>
      <h2>Інші пам'ятки міста з типом: {type}</h2>
      {}
    </div>
  );
}

export default OtherLandmarks;