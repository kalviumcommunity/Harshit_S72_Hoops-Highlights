const matches = require('../models/Match');

// Get all matches
const getAllMatches = (req, res) => {
  res.json(matches);
};

// Get match by ID
const getMatchById = (req, res) => {
  const match = matches.find(m => m.match_id === parseInt(req.params.id));
  if (!match) {
    return res.status(404).json({ message: 'Match not found' });
  }
  res.json(match);
};

// Create new match
const createMatch = (req, res) => {
  const newMatch = {
    match_id: matches.length + 1,
    team_a: req.body.team_a,
    team_b: req.body.team_b,
    score_a: req.body.score_a,
    score_b: req.body.score_b,
    date: req.body.date
  };
  matches.push(newMatch);
  res.status(201).json(newMatch);
};

// Update match
const updateMatch = (req, res) => {
  const matchIndex = matches.findIndex(m => m.match_id === parseInt(req.params.id));
  if (matchIndex === -1) {
    return res.status(404).json({ message: 'Match not found' });
  }

  const updatedMatch = {
    match_id: parseInt(req.params.id),
    team_a: req.body.team_a || matches[matchIndex].team_a,
    team_b: req.body.team_b || matches[matchIndex].team_b,
    score_a: req.body.score_a || matches[matchIndex].score_a,
    score_b: req.body.score_b || matches[matchIndex].score_b,
    date: req.body.date || matches[matchIndex].date
  };

  matches[matchIndex] = updatedMatch;
  res.json(updatedMatch);
};

module.exports = {
  getAllMatches,
  getMatchById,
  createMatch,
  updateMatch
};