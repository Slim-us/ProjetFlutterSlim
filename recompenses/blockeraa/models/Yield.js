const mongoose = require('mongoose');

const YieldSchema = new mongoose.Schema({
  optionId: { type: mongoose.Schema.Types.ObjectId, ref: 'StakingOption', required: true },
  yieldAmount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Yield', YieldSchema);
