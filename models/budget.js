const mongoose = require("mongoose");
const budgetSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  totalBudget: { type: Number, default: 0 }
});

module.exports = mongoose.model("Budget", budgetSchema);
