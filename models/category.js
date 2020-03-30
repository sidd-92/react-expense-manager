const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: { type: String },
  label: { type: String }
});
module.exports = mongoose.model("Categories", categorySchema);
