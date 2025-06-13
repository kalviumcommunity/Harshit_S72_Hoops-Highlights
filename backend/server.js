const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data
const matches = [
  {
    match_id: 1,
    team_a: "Kalvium Kings",
    team_b: "MIT Dunkers",
    score_a: 75,
    score_b: 68,
    date: "2025-06-10"
  },
  {
    match_id: 2,
    team_a: "Tech Titans",
    team_b: "Code Warriors",
    score_a: 82,
    score_b: 79,
    date: "2025-06-11"
  }
];

const teams = [
  {
    team_id: 1,
    name: "Kalvium Kings",
    players: ["John Doe", "Jane Smith", "Mike Johnson"],
    wins: 5,
    losses: 2
  },
  {
    team_id: 2,
    name: "MIT Dunkers",
    players: ["Alex Brown", "Sarah Wilson", "Tom Davis"],
    wins: 3,
    losses: 4
  }
];

// GET all matches
app.get('/matches', (req, res) => {
  res.json(matches);
});

// GET specific match by ID
app.get('/matches/:id', (req, res) => {
  const match = matches.find(m => m.match_id === parseInt(req.params.id));
  if (!match) {
    return res.status(404).json({ message: 'Match not found' });
  }
  res.json(match);
});

// GET all teams
app.get('/teams', (req, res) => {
  res.json(teams);
});

// GET specific team by ID
app.get('/teams/:id', (req, res) => {
  const team = teams.find(t => t.team_id === parseInt(req.params.id));
  if (!team) {
    return res.status(404).json({ message: 'Team not found' });
  }
  res.json(team);
});

// POST new match
app.post('/matches', (req, res) => {
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
});

// POST new team
app.post('/teams', (req, res) => {
  const newTeam = {
    team_id: teams.length + 1,
    name: req.body.name,
    players: req.body.players,
    wins: req.body.wins || 0,
    losses: req.body.losses || 0
  };
  teams.push(newTeam);
  res.status(201).json(newTeam);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
