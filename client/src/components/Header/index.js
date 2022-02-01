import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <div className="header-logo">
        <Link to="/">Full Stack Exercise Track</Link>
      </div>
      <nav>
        <ul className="nav-links">
          {Auth.loggedIn() ? (
            <>
              <li>
                <Link to="/log">Log Exercise</Link>
              </li>
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
