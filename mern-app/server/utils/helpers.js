// Format response object
const formatResponse = (data, message = 'Success') => {
  return {
    success: true,
    message,
    data
  };
};

// Format error response
const formatError = (message, statusCode = 500) => {
  return {
    success: false,
    message,
    statusCode
  };
};

// Generate unique ID
const generateId = (prefix = '') => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 1000);
  return `${prefix}${timestamp}${random}`;
};

// Validate date string (YYYY-MM-DD)
const isValidDate = (dateString) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

// Calculate win percentage
const calculateWinPercentage = (wins, losses) => {
  const total = wins + losses;
  if (total === 0) return 0;
  return ((wins / total) * 100).toFixed(2);
};

// Sort matches by date
const sortMatchesByDate = (matches, ascending = true) => {
  return matches.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// Filter matches by date range
const filterMatchesByDateRange = (matches, startDate, endDate) => {
  return matches.filter(match => {
    const matchDate = new Date(match.date);
    return matchDate >= new Date(startDate) && matchDate <= new Date(endDate);
  });
};

// Calculate team statistics
const calculateTeamStats = (team, matches) => {
  const stats = {
    totalGames: team.wins + team.losses,
    winPercentage: calculateWinPercentage(team.wins, team.losses),
    totalPoints: 0,
    averagePoints: 0,
    matchesPlayed: 0
  };

  matches.forEach(match => {
    if (match.team_a === team.name) {
      stats.totalPoints += match.score_a;
      stats.matchesPlayed++;
    } else if (match.team_b === team.name) {
      stats.totalPoints += match.score_b;
      stats.matchesPlayed++;
    }
  });

  stats.averagePoints = stats.matchesPlayed > 0 
    ? (stats.totalPoints / stats.matchesPlayed).toFixed(2)
    : 0;

  return stats;
};

module.exports = {
  formatResponse,
  formatError,
  generateId,
  isValidDate,
  calculateWinPercentage,
  sortMatchesByDate,
  filterMatchesByDateRange,
  calculateTeamStats
};