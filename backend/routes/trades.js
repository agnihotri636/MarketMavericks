const express = require('express');
const Trade = require('../models/Trade');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const trade = new Trade({
      ...req.body,
      user: req.user.id,
    });
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ error: 'Error creating trade' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const trades = await Trade.find({ user: req.user.id });
    res.json(trades);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching trades' });
  }
});

module.exports = router;