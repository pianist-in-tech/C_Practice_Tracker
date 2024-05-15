import React from 'react';
import NavBar from './nav';
import './home.css';

const HomePage = () => (
  <div>
    <NavBar />
    <div className="home-content"> {/* Main content area */}
        <div className="home-left"> {/* Left half */}
          <h1>Welcome to Let's Practice! Tracker</h1>
          <p>Track your music practice, and get custom practice stuggestions on the go!</p>
          {/* Additional information or content */}
        </div>
      </div>
  </div>
);

export default HomePage;