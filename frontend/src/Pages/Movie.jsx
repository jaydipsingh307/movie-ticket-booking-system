import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import MovieCard from "../components/MovieCard";

function Movie() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const res = await API.get("/movies");
            setMovies(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-4">

            {/* Breadcrumb */}
            <nav className="mb-3">
                <span
                    style={{
                        cursor: "pointer",
                        color: "#0d6efd",
                        fontWeight: "bold",
                    }}
                    onClick={() => navigate("/")}
                >
                    🏠 Home
                </span>

                <span className="mx-2">&gt;</span>

                <span className="fw-bold text-dark">
                    🎬 Movies
                </span>
            </nav>

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">

                <h2 className="fw-bold">
                    🎬 Now Showing Movies
                </h2>

                <button
                    className="btn btn-outline-danger"
                    onClick={() => navigate("/")}
                >
                    ⬅ Back to Home
                </button>

            </div>

            {/* Movies */}
            <div className="row">

                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                        />
                    ))
                ) : (
                    <h4 className="text-center">
                        No Movies Available
                    </h4>
                )}

            </div>

        </div>
    );
}

export default Movie;