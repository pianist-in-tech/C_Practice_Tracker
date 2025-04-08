const express = require("express");
const OpenAI = require("openai");

//initialize the OpenAI client with the API key from environment variables. 
const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, 
  });
  
  const router = express.Router(); // Create a new router instance, so this module can be plugged in to the main app.js

//define a POST route (frontend will send POST requests here with a prompt)
  router.post('/get-response', async (req, res) => {
    try {
      const { prompt } = req.body; // Get the prompt string from the frontend request
      const completion = await openai.chat.completions.create({ //send the prompt to OpenAi's Chat AI and wait for a response
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json(completion.choices[0].message.content); // Send back the model's generated message to the frontend
    } catch (error) {
      res.status(500).json({ error: 'Error with OpenAI: ' + error.message });
    }
  });
  
  module.exports = router; 
