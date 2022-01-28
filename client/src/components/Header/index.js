import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="header-logo">
        <h1>Full Stack Exercise Track</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#log">Log Exercise</a>
          </li>
          <li>
            <a href="#view">View Log</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
