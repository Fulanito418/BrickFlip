const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Create Model
const Theme = mongoose.model("Theme", themeSchema);

module.exports = Theme;
