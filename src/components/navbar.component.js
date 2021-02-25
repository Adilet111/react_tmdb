import React from 'react';


export default function Navbar() {

    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div to="/" className="navbar-brand">MovieFinder</div>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <a href="#" className="nav-link">Exercises</a>
          </li>
          <li className="navbar-item">
          <a href="#" className="nav-link">Get Items</a>
          </li>
          <li className="navbar-item">
          <a href="#" className="nav-link">Create User</a>
          </li>
        </ul>
        </div>
      </nav>
    );
  }