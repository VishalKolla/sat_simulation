import React from 'react';
import Plot from 'react-plotly.js';

function PlotOrbits({ data }) {
  return (
    <Plot
      data={data.satellites.map(satellite => ({
        x: satellite.positions.map(pos => pos[0]),
        y: satellite.positions.map(pos => pos[1]),
        z: satellite.positions.map(pos => pos[2]),
        type: 'scatter3d',
        mode: 'lines',
        name: satellite.name,
      }))}
      layout={{ scene: { xaxis: { title: 'X' }, yaxis: { title: 'Y' }, zaxis: { title: 'Z' } } }}
    />
  );
}

export default PlotOrbits;
