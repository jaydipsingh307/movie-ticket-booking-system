const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: String,
    image: String,
    genre: String,
    language: String,
    duration: String,
    price: Number,
    description: String,
});

module.exports = mongoose.model("Movie", movieSchema);