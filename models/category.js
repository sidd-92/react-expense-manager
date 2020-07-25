const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: { type: String },
  label: {
    type: mongoose.Schema.Types.String,
    unique: true,
    index: true,
    required: true,
  },
});
module.exports = mongoose.model("Categories", categorySchema);
