import React from 'react';
import Plot from 'react-plotly.js';

function PlotSatellite({ data }) {
  return (
    <Plot
      data={[
        {
          x: data.positions.map(pos => pos[0]),
          y: data.positions.map(pos => pos[1]),
          z: data.positions.map(pos => pos[2]),
          type: 'scatter3d',
          mode: 'markers',
          marker: { size: 5 },
        }
      ]}
      layout={{ scene: { xaxis: { title: 'X' }, yaxis: { title: 'Y' }, zaxis: { title: 'Z' } } }}
    />
  );
}

export default PlotSatellite;
