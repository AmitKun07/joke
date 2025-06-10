const express = require("express");
const router = express.Router();
const Joke = require("../models/Joke");

// Get all jokes
router.get("/", async (req, res) => {
  const jokes = await Joke.find();
  res.json(jokes);
});

// Post a new joke
router.post("/", async (req, res) => {
  const newJoke = new Joke(req.body);
  await newJoke.save();
  res.json(newJoke);
});

// Like a joke
router.patch("/:id/like", async (req, res) => {
  const joke = await Joke.findById(req.params.id);
  joke.likes += 1;
  await joke.save();
  res.json(joke);
});

module.exports = router;