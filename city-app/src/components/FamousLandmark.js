import React from 'react';

import { useParams } from 'react-router-dom';

const FamousLandmark = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Найвідоміша пам'ятка міста з id: {id}</h2>
      {}
    </div>
  );
}

export default FamousLandmark;