const validateMatch = (req, res, next) => {
  const { team_a, team_b, score_a, score_b, date } = req.body;

  // Check required fields
  if (!team_a || !team_b) {
    return res.status(400).json({ message: 'Both team names are required' });
  }

  // Validate scores
  if (score_a < 0 || score_b < 0) {
    return res.status(400).json({ message: 'Scores cannot be negative' });
  }

  // Validate date format (YYYY-MM-DD)
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (date && !dateRegex.test(date)) {
    return res.status(400).json({ message: 'Invalid date format. Use YYYY-MM-DD' });
  }

  next();
};

const validateTeam = (req, res, next) => {
  const { name, players, wins, losses } = req.body;

  // Check required fields
  if (!name) {
    return res.status(400).json({ message: 'Team name is required' });
  }

  // Validate players array
  if (players && !Array.isArray(players)) {
    return res.status(400).json({ message: 'Players must be an array' });
  }

  // Validate wins and losses
  if ((wins !== undefined && wins < 0) || (losses !== undefined && losses < 0)) {
    return res.status(400).json({ message: 'Wins and losses cannot be negative' });
  }

  next();
};

const requestLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} ${req.url}`);
  next();
};

module.exports = {
  validateMatch,
  validateTeam,
  requestLogger
};