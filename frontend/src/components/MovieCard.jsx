import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "300px",
        border: "2px solid red",
        margin: "20px",
        padding: "10px",
      }}
    >
      <h3>{movie.title}</h3>

      <img
        src={`https://movie-ticket-backend-5t6p.onrender.com${movie.image}`}
        alt={movie.title}
        width="250"
      />

      <p>{movie.genre}</p>

      <p>{movie.language}</p>

      <p>{movie.duration}</p>

      <h4>₹{movie.price}</h4>

      <Link
        to="/booking"
        state={{ movie }}
        className="btn btn-danger mt-3"
      >
        Book Ticket
      </Link>
    </div>
  );
}

export default MovieCard;