const express = require("express");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY, 
  });
  
  const router = express.Router(); // Create a new router instance

  router.post('/get-response', async (req, res) => {
    try {
      const { prompt } = req.body; // Get the prompt from the client
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
      res.json(completion.choices[0].message.content); // Send the response back to the client
    } catch (error) {
      res.status(500).json({ error: 'Error with OpenAI: ' + error.message });
    }
  });
  
  module.exports = router; 
