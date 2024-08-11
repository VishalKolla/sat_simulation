import React, { useState } from 'react';

function InputForm({ onSubmit }) {
  const [satelliteData, setSatelliteData] = useState('');
  const [plotType, setPlotType] = useState('one');

  const handleChange = (event) => {
    setSatelliteData(event.target.value);
  };

  const handlePlotTypeChange = (event) => {
    setPlotType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ satelliteData, plotType });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={satelliteData} onChange={handleChange} placeholder="Enter satellite data" />
      <div>
        <label>
          <input
            type="radio"
            value="one"
            checked={plotType === 'one'}
            onChange={handlePlotTypeChange}
          />
          Plot 1 satellite against current ones
        </label>
        <label>
          <input
            type="radio"
            value="two"
            checked={plotType === 'two'}
            onChange={handlePlotTypeChange}
          />
          Plot 2 satellites
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
