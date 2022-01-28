import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <h1>Full Stack Exercise Track</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <Link to="/signup">Signup</Link>
          <li>
            <Link to="/log">Log Exercise</Link>
          </li>
          <li>
            <Link to="/view">View Log</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
