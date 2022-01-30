import React from 'react';

function getYear() {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <footer>
      <div>
      <span>
        © {getYear()} By Emily Thon, Cassie Simpson, Manny Mendelez, and Raymond Cerney
      </span>
      </div>
    </footer>
  );
};

export default Footer;
