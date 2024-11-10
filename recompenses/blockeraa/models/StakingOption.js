const mongoose = require('mongoose');

const StakingOptionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  duration: { type: Number, required: true }, // in days
});

module.exports = mongoose.model('StakingOption', StakingOptionSchema);
