const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hoops_highlights', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const matchRoutes = require('./routes/matchRoutes');
const teamRoutes = require('./routes/teamRoutes');
const authRoutes = require('./routes/authRoutes');

// Use routes
app.use('/api/matches', matchRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/auth', authRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Hoops Highlights API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});