const express = require('express');
const router = express.Router();
const { 
  getAllTeams, 
  getTeamById,
  getTeamByName,
  getTeamStats,
  createTeam, 
  updateTeam,
  deleteTeam,
  addPlayer,
  removePlayer
} = require('../controllers/teamController');

// Get all teams
router.get('/', getAllTeams);

// Get team by ID
router.get('/:id', getTeamById);

// Get team by name
router.get('/name/:teamName', getTeamByName);

// Get team statistics
router.get('/:id/stats', getTeamStats);

// Create new team
router.post('/', createTeam);

// Update team
router.put('/:id', updateTeam);

// Delete team
router.delete('/:id', deleteTeam);

// Add player to team
router.post('/:id/players', addPlayer);

// Remove player from team
router.delete('/:id/players/:playerId', removePlayer);

module.exports = router;