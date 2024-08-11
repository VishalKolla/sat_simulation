import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Satellite Simulation Tool</h1>
      <nav>
        <ul>
          <li><Link to="/single-satellite">Plot a Single Satellite</Link></li>
          <li><Link to="/multiple-satellites">Plot Multiple Satellites</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
