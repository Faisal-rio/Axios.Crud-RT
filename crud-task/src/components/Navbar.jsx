import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">She💞zi Zone
        </h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/create">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
