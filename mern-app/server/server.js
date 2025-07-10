const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');

// Use routes
app.use('/matches', matchRoutes);
app.use('/teams', teamRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
