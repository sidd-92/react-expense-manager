const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: { type: String, unique: true }
});
module.exports = mongoose.model("Categories", categorySchema);
