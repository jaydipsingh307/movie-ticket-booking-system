const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();
console.log("PORT =", process.env.PORT);

const connectDB = require("./Config/db");

connectDB();

const app = express();

const path = require("path");

app.use("/posters", express.static(path.join(__dirname, "../frontend/public/posters")));

app.use(cors());

app.use(express.json());

app.use(cors());

app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));

app.get("/", (req, res) => {

    res.send("Movie Ticket Booking API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});