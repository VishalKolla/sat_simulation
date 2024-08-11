import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import PlotSatellite from '../components/PlotSatellite';
import CollisionAlerts from '../components/CollisionAlerts';

function SingleSatellite() {
  const [data, setData] = useState(null);
  const [collisions, setCollisions] = useState([]);

  const handleFormSubmit = (formData) => {
    // Logic to handle form submission and fetch data from the backend
    // This is where you would make the API call to your Python backend
    setData(formData); // Placeholder for setting fetched data
    // Set collisions based on the backend response
  };

  return (
    <div>
      <h2>Plot a Single Satellite Against Current Satellites</h2>
      <InputForm onSubmit={handleFormSubmit} />
      {data && <PlotSatellite data={data} />}
      {collisions.length > 0 && <CollisionAlerts collisions={collisions} />}
    </div>
  );
}

export default SingleSatellite;
