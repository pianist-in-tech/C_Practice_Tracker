import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'
import logo from './assets/Tracker_logo.png';

const NavBar = () => (
  <nav className="navbar">
    <div className="navbar-left">
        <img src={logo} alt='Practice Tracker logo' className='navbar-logo'/> 
      </div>
      <div className="navbar-right">
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/practice_page">Practice Tracker</Link></li>
      <li><Link to="/practice_suggestions">Practice Suggestions</Link></li>
    </ul>
    </div>
  </nav>
);

export default NavBar;

