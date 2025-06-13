const express = require('express');
const app = express();
const port = 3000;

// GET endpoint
app.get('/matches', (req, res) => {
  res.json([
    {
      match_id: 1,
      team_a: "Kalvium Kings",
      team_b: "MIT Dunkers",
      score_a: 75,
      score_b: 68,
      date: "2025-06-10"
    }
  ]);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
