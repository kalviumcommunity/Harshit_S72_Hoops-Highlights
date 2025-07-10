const teams = require('../models/Team');

// Get all teams
const getAllTeams = (req, res) => {
  res.json(teams);
};

// Get team by ID
const getTeamById = (req, res) => {
  const team = teams.find(t => t.team_id === parseInt(req.params.id));
  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }
  res.json(team);
};

// Create new team
const createTeam = (req, res) => {
  const newTeam = {
    team_id: teams.length + 1,
    name: req.body.name,
    players: req.body.players,
    wins: req.body.wins || 0,
    losses: req.body.losses || 0
  };
  teams.push(newTeam);
  res.status(201).json(newTeam);
};

// Update team
const updateTeam = (req, res) => {
  const teamIndex = teams.findIndex(t => t.team_id === parseInt(req.params.id));
  if (teamIndex === -1) {
    return res.status(404).json({ message: 'Team not found' });
  }

  const updatedTeam = {
    team_id: parseInt(req.params.id),
    name: req.body.name || teams[teamIndex].name,
    players: req.body.players || teams[teamIndex].players,
    wins: req.body.wins !== undefined ? req.body.wins : teams[teamIndex].wins,
    losses: req.body.losses !== undefined ? req.body.losses : teams[teamIndex].losses
  };

  teams[teamIndex] = updatedTeam;
  res.json(updatedTeam);
};

module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam
};