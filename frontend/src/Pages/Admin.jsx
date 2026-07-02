import { useState } from "react";
import axios from "axios";

function Admin() {
    const [image, setImage] = useState(null);
    const [movie, setMovie] = useState({
        title: "",
        genre: "",
        language: "",
        duration: "",
        price: "",
        image: "",
        description: "",
    });

    const handleChange = (e) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const formData = new FormData();

            formData.append("title", movie.title);
            formData.append("genre", movie.genre);
            formData.append("language", movie.language);
            formData.append("duration", movie.duration);
            formData.append("price", movie.price);
            formData.append("description", movie.description);
            formData.append("image", image);

            await axios.post(
                "http://localhost:5001/api/movies",
                formData
            );

            alert("🎉 Movie Added Successfully!");

            setMovie({
                title: "",
                genre: "",
                language: "",
                duration: "",
                price: "",
                image: "",
                description: "",
            });
        } catch (error) {
            console.log(error);
            alert("Failed to Add Movie");
        }
    };

    return (

    <div
        className="container py-5"
        style={{
            minHeight: "100vh",
            background:
                "linear-gradient(135deg,#141e30,#243b55)",
        }}
    >

        <div className="row justify-content-center">

            <div className="col-md-8">

                <div
                    className="card shadow-lg p-4"
                    style={{ borderRadius: "20px" }}
                >

                    <h2 className="text-center text-danger mb-4">
                        🎬 Add New Movie
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Movie Title"
                            name="title"
                            value={movie.title}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Genre"
                            name="genre"
                            value={movie.genre}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Language"
                            name="language"
                            value={movie.language}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Duration"
                            name="duration"
                            value={movie.duration}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            className="form-control mb-3"
                            placeholder="Ticket Price"
                            name="price"
                            value={movie.price}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="file"
                            className="form-control mb-3"
                            onChange={(e) => setImage(e.target.files[0])}
                        />

                        <textarea
                            className="form-control mb-4"
                            rows="4"
                            placeholder="Movie Description"
                            name="description"
                            value={movie.description}
                            onChange={handleChange}
                        ></textarea>

                        <button
                            className="btn btn-danger w-100"
                        >
                            ➕ Add Movie
                        </button>

                    </form>

                </div>

            </div>

        </div>

    </div>
    );
}

export default Admin;