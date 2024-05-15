import React, { useState, useEffect } from 'react';
import NavBar from './nav';
import './dashboard.css';

const Dashboard = () => {
  // Initialize state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [instrument, setInstrument] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  // Function to load user information from local storage
  const loadUserInfoFromStorage = () => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      const { name, email, instrument, proficiency } = JSON.parse(storedUserInfo);
      setName(name);
      setEmail(email);
      setInstrument(instrument);
      setProficiency(proficiency);
      setSubmitted(true); // Set submitted to true to show user information
    }
  };

  // Load user information from local storage when component mounts
  useEffect(() => {
    loadUserInfoFromStorage();
  }, []); // Empty dependency array to run only on component mount

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from default submission

    // Prepare user information to be saved
    const userInfo = {
      name,
      email,
      instrument,
      proficiency,
    };

    // Save user information to local storage
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    // Update state to indicate form submission
    setSubmitted(true);
  };

  // Function to handle editing user information
  const handleEdit = () => {
    // Reset the submitted state to allow editing
    setSubmitted(false);
  };

  return (
    <div>
      <NavBar /> {/* Include your navigation bar */}
      <div className='form-container'>
        {submitted ? ( // If form is submitted, show user information
          <div>
            <h1>Your Profile</h1>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Instrument:</strong> {instrument}</p>
            <p><strong>Proficiency Level:</strong> {proficiency}</p>
            <button onClick={handleEdit}>Edit Information</button> {/* Button to edit information */}
          </div>
        ) : ( // If form is not submitted, show the form
          <div>
            <h1>Complete Your Profile</h1> {/* Page heading */}
            <form onSubmit={handleSubmit}> {/* Form for collecting user information */}
              <label>
                Name:
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Instrument:
                <input
                  type="text"
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                />
              </label>

              <label>
                Proficiency Level:
                <select
                  value={proficiency}
                  onChange={(e) => setProficiency(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="beginner">Complete Beginner</option>
                  <option value="advanced beginner">Advanced Beginner</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                </select>
              </label>

              <button type="submit">Submit</button> {/* Submit button */}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
