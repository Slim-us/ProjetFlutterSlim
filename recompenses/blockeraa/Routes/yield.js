const express = require('express');
const router = express.Router();
const Yield = require('../models/Yield');

// Route to get yield data for a specific staking option
router.get('/:optionId', async (req, res) => {
  try {
    const yields = await Yield.find({ optionId: req.params.optionId });
    res.json(yields);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve yield data' });
  }
});

// Route to create a new yield entry
router.post('/', async (req, res) => {
  const { optionId, yieldAmount } = req.body;
  try {
    const newYield = new Yield({ optionId, yieldAmount });
    await newYield.save();
    res.status(201).json(newYield);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create yield entry' });
  }
});

module.exports = router;
