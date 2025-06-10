const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  content: String,
  type: String, // e.g., 'Programming', 'Dark'
  likes: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Joke", jokeSchema);