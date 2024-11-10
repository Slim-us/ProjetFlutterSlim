const express = require('express');
const router = express.Router();
const StakingOption = require('../models/StakingOption');

// Route to get all staking options
router.get('/options', async (req, res) => {
  try {
    const options = await StakingOption.find();
    res.json(options);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve staking options' });
  }
});

// Route to create a new staking option
router.post('/options', async (req, res) => {
  const { name, rate, duration } = req.body;
  try {
    const newOption = new StakingOption({ name, rate, duration });
    await newOption.save();
    res.status(201).json(newOption);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create staking option' });
  }
});

module.exports = router;
