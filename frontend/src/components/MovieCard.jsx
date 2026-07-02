import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    console.log(movie);
    return (
        <div className="col-md-4 mb-4">
            <div className="card shadow h-100">

                <img
                    src={`https://movie-ticket-backend-5t6p.onrender.com/${movie.image}`}
                    className="card-img-top"
                    alt={movie.title}
                    style={{
                        height: "400px",
                        objectFit: "cover"
                    }}
                />
                <div className="card-body">
                    <h5>{movie.title}</h5>

                    <p><b>Genre:</b> {movie.genre}</p>

                    <p><b>Language:</b> {movie.language}</p>

                    <p><b>Duration:</b> {movie.duration}</p>

                    <h5 className="text-success">₹ {movie.price}</h5>


                    <Link
                        to="/booking"
                        state={{ movie }}
                        className="btn btn-danger w-100"
                    >
                        Book Ticket
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default MovieCard;