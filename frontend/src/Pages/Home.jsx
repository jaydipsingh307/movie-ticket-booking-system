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
                <h2 className="text-center mb-4">Now Showing</h2>

                <SearchBar
                    search={search}
                    setSearch={setSearch}
                />

                <div>
                    {filteredMovies.map((movie) => (
                        <div key={movie._id}>
                            <h3>{movie.title}</h3>
                            <p>{movie.genre}</p>
                            <hr />
                        </div>
                    ))}
                </div>

            </div>


            <Footer />
        </>
    );
}

export default Home;