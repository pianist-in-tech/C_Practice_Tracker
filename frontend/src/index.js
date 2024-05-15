import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Get the root DOM element where your React app will be mounted
const rootElement = document.getElementById('root');

// Create a React root instance
const root = createRoot(rootElement); // Initialize the React root

// Render your application with the updated React 18 approach
root.render(
  <React.StrictMode>
      <App /> {/* Your main App component */}
  </React.StrictMode>
);

// Performance measurement (optional)
reportWebVitals();
