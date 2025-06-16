import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <ul className="navbar-nav d-flex flex-row gap-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technologies">Technologies</Link>
        </li>
      </ul>
    </nav>
  );
}
