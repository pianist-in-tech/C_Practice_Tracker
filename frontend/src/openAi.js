import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for HTTP requests
import './practice_suggestions.css'

const PracticeSuggestions = () => {
  const [response, setResponse] = useState(null);
  const [instrument, setInstrument] = useState('');
  const [proficiency, setProficiency] = useState('');

  useEffect(() => {
    // Retrieve user information from local storage
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      const instrumentFromStorage = userInfo.instrument || '';
      const proficiencyFromStorage = userInfo.proficiency || '';
      
      console.log('Instrument from local storage:', instrumentFromStorage);
      console.log('Proficiency from local storage:', proficiencyFromStorage);
  
      // Update state with user information
      setInstrument(instrumentFromStorage);
      setProficiency(proficiencyFromStorage);
    }
  }, []);
  
  
const topics = [
  {
    title: 'Technical Exercises Suggestions',
    prompt: `Give me some suggestions for technical exercises for ${proficiency} ${instrument} players. This should be no more than 5 suggestions, in a numbered list. Each suggestion has to be placed one after each other with the line break after each. Consider that they just started practicing their instrument. Do not give each response item a number at the beginning of response. Just place them in a separate sentence/paragraph. DO NOT NUMBER THOSE FIVE SUGGESTIONS`,
  },
  {
    title: 'Best pieces to practice for your level',
    prompt: `What are some of the best ${instrument} pieces to practice at a ${proficiency} level to improve and develop the skills? This should be no more than 5 suggestions, in a numbered list. Each suggestion has to be placed one after each other with the line break after each. IMPORTANT: Do not give each response item a number at the beginning of response. Just place them in a separate sentence/paragraph. DO NOT NUMBER THOSE FIVE SUGGESTIONS!`,
  },
  {
    title: 'How to handle a difficult passage',
    prompt: `What are some tips for handling a difficult passage in ${instrument} for a ${proficiency} player? This should be no more than 5 suggestions, in a numbered list. Each suggestion has to be placed one after each other with the line break after each. IMPORTANT: Do not give each response item a number at the beginning of response. Just place them in a separate sentence/paragraph. DO NOT NUMBER THOSE FIVE SUGGESTIONS!`,
  },
];

  const handleClick = async (prompt) => {
    console.log(prompt); // Add this line to log the prompt
    try {
      // Modify the prompt to include instrument and proficiency
      const modifiedPrompt = `${prompt} ${instrument} ${proficiency}`;
      const result = await axios.post('http://localhost:3001/ai-endpoint/get-response', { prompt: modifiedPrompt });
      setResponse(result.data); // Store OpenAI response in state
    } catch (error) {
      console.error('Error fetching OpenAI response:', error);
    }
  };

  return (
    <div className='practice-suggestions'>
      <h1>Practice Suggestions</h1>
      <ul className='topics-list'>
        {topics.map((topic, index) => (
          <li key={index}>
            <button onClick={() => handleClick(topic.prompt)} className="topic-button">
              {topic.title}
            </button>
          </li>
        ))}
      </ul>

      {response && (
        <div className='response-container'>
          <h2>Suggestions:</h2>
          <ol className='response-list'>
            {response.split('\n').map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default PracticeSuggestions;
