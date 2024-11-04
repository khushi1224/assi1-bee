const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// GET route to display the contact form
app.get('/contact', (req, res) => {
  res.render('contact'); // Render contact form view
});

// POST route to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation to ensure all fields are filled
  if (!name || !email || !message) {
    res.send("All fields are required!");
    return;
  }

  // Additional validation: email format and message length
  if (!email.includes('@')) {
    res.send("Please provide a valid email address.");
    return;
  }
  if (message.trim().length < 10) {
    res.send("Message should be at least 10 characters long.");
    return;
  }

  // Render thank you page with user-submitted data
  res.render('thank-you', { name, email, message });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
