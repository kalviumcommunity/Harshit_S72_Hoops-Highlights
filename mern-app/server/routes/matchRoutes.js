const express = require('express');
const router = express.Router();
const { getAllMatches, getMatchById, createMatch, updateMatch } = require('../controllers/matchController');

// Match routes
router.get('/', getAllMatches);
router.get('/:id', getMatchById);
router.post('/', createMatch);
router.put('/:id', updateMatch);

module.exports = router;