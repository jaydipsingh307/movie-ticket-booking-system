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

    return (
        <>
            <Navbar />

            <Hero />

            <div className="container mt-5">
                <h2 className="text-center mb-4">Now Showing</h2>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div className="row">
                    {filteredMovies.map((movie) => (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;