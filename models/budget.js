const mongoose = require("mongoose");
const budgetSchema = mongoose.Schema({
  _id: { type: String, default: "budget1234" },
  totalBudget: { type: Number, default: 0 }
});

module.exports = mongoose.model("Budget", budgetSchema);
