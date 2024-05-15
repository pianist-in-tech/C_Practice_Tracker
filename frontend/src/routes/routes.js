import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../home'; 
import Dashboard from '../dashboard';
import PracticePage from '../practice_page';
import SuggestionsPage from '../practice_suggestions';


const AppRoutes = () => {
 

  return (
      <Routes>
        {/* Public route */}
        <Route path="/home" 
        element={<HomePage />}    
             />

        {/* Private route */}
          <Route 
          path="/dashboard" 
          element={<Dashboard />} 
    
          />

          <Route 
          path="/practice_page" 
          element={<PracticePage />} 
         
          />
          <Route 
          path="/practice_suggestions" 
          element={<SuggestionsPage />} 
      
          />

        {/* Fallback route to redirect to the home/sign-in page */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
