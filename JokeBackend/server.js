 const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("JokeHub API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐Server running on port ${PORT}`));

const jokeRoutes = require("./routes/jokes");
app.use("/api/jokes", jokeRoutes);