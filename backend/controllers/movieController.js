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

        const movie = new Movie({
            title: req.body.title,
            genre: req.body.genre,
            language: req.body.language,
            duration: req.body.duration,
            price: req.body.price,
            description: req.body.description,
            image: req.file ? req.file.filename : "",
        });

        await movie.save();

        res.status(201).json(movie);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message,
        });
    }
};