const express = require('express');
const router = express.Router();
const { getAllTeams, getTeamById, createTeam, updateTeam } = require('../controllers/teamController');

// Team routes
router.get('/', getAllTeams);
router.get('/:id', getTeamById);
router.post('/', createTeam);
router.put('/:id', updateTeam);

module.exports = router;