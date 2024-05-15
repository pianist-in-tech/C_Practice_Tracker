import React, {useContext} from 'react';
import NavBar from './nav'; // Navigation bar
import PracticeTracker from './tracker';


// Create the PracticePage layout
const PracticePage = () => {

  return (
    <div className='practice-page-container'>
       <NavBar /> {/* Navigation bar at the top */}
      <div className='content-container'>
        <div className='left-container'>
        <PracticeTracker /> {/* Practice Tracker on the left */}
      </div>
    </div>
    </div>
  );
};


export default PracticePage;
