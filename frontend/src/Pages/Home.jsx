import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import API from "../services/api";

function Home() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    // MongoDB se Movies Fetch
    const fetchMovies = async () => {
        try {
            const res = await API.get("/movies");
            console.log(res.data);
            setMovies(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Page Load hote hi Movies Fetch hongi
    useEffect(() => {
        fetchMovies();
    }, []);

    // Search Filter
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    console.log("Movies State:", movies);
    return (
        <>
            <Navbar />

            <Hero />

            <div className="container mt-5">
                <h2 className="text-center mb-4" style={{ color: "red" }}>
                    Now Showing Movies
                </h2>
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div className="row">
                    {filteredMovies.map((movie) => (
                        <div className="col-md-4 mb-4" key={movie._id}>
                            <div className="card shadow">
                                <img
                                    src={`https://movie-ticket-backend-5t6p.onrender.com${movie.image}`}
                                    className="card-img-top"
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5>{movie.title}</h5>
                                    <p>{movie.genre}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Home;