const Movie = require("../models/Movie");

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.addMovie = async (req, res) => {
    try {

        const movie = await Movie.create({

            title: req.body.title,
            genre: req.body.genre,
            language: req.body.language,
            duration: req.body.duration,
            price: req.body.price,
            description: req.body.description,
            image: "/uploads/" + req.file.filename,

        });

        res.status(201).json(movie);

    } catch (err) {

        res.status(500).json({
            message: err.message,
        });

    }
};