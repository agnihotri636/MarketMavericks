const mongoose = require('mongoose');

const tradeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  symbol: { type: String, required: true },
  entryPrice: { type: Number, required: true },
  exitPrice: { type: Number, required: true },
  quantity: { type: Number, required: true },
  direction: { type: String, enum: ['Long', 'Short'], required: true },
  profitLoss: { type: Number, required: true },
  commission: { type: Number, default: 0 },
  tags: [String],
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Trade', tradeSchema);

//