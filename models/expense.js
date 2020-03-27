const mongoose = require("mongoose");
const expenseSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  expenseDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  itemAmount: { type: Number, required: true, default: 0 },
  notes: { type: String },
  isDeleted: { type: Boolean, default: false }
});

module.exports = mongoose.model("Expense", expenseSchema);
