import React, {useContext} from 'react';
import NavBar from './nav'; // Navigation bar
import PracticeSuggestions from './openAi';
import './practice_suggestions.css'



// Create the PracticePage layout
const SuggestionsPage = () => {
  
  return (
    <div className='practice-suggestions-container'>
       <NavBar /> {/* Navigation bar at the top */}
      <div className='content-container'>
        <PracticeSuggestions /> {/* Practice Suggestions */}
    </div>
    </div>
  );
};


export default SuggestionsPage;
