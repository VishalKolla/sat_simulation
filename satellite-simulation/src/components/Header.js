import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/single-satellite">Single Satellite</Link></li>
          <li><Link to="/multiple-satellites">Multiple Satellites</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
