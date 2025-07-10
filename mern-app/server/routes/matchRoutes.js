const express = require('express');
const router = express.Router();
const { 
  getAllMatches, 
  getMatchById, 
  getMatchesByTeam,
  getMatchesByDate,
  createMatch, 
  updateMatch,
  deleteMatch
} = require('../controllers/matchController');

// Get all matches or filter by query parameters
router.get('/', getAllMatches);

// Get match by ID
router.get('/:id', getMatchById);

// Get matches by team name
router.get('/team/:teamName', getMatchesByTeam);

// Get matches by date
router.get('/date/:date', getMatchesByDate);

// Create new match
router.post('/', createMatch);

// Update match
router.put('/:id', updateMatch);

// Delete match
router.delete('/:id', deleteMatch);

module.exports = router;