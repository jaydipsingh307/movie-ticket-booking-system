const express = require("express");
const router = express.Router();
const posters = require("../Middleware/posters");

const {
  getMovies,
  addMovie,
} = require("../controllers/movieController");

router.get("/", getMovies);
router.post("/", posters.single("poster"), addMovie);

module.exports = router;