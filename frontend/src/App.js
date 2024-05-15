// import './App.css';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './routes/routes'; // Your routes component

function App() {
  return (
      <BrowserRouter>
      <div>
          <AppRoutes /> {/* Define routes */}
        </div>
      </BrowserRouter> 
  );
}

export default App;
