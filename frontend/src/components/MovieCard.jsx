import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div
        className="card shadow-lg border-0 h-100"
        style={{ borderRadius: "15px", overflow: "hidden" }}
      >
        <img
          src={`https://movie-ticket-backend-5t6p.onrender.com${movie.image}`}
          alt={movie.title}
          className="card-img-top"
          style={{
            height: "380px",
            objectFit: "cover",
          }}
        />

        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">{movie.title}</h5>

          <p className="mb-1">
            <strong>Genre:</strong> {movie.genre}
          </p>

          <p className="mb-1">
            <strong>Language:</strong> {movie.language}
          </p>

          <p className="mb-2">
            <strong>Duration:</strong> {movie.duration}
          </p>

          <h4 className="text-success mt-auto">
            ₹ {movie.price}
          </h4>

          <Link
            to="/booking"
            state={{ movie }}
            className="btn btn-danger mt-3"
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;