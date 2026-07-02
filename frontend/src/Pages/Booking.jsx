import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Booking() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const movie = state?.movie;

    const seats = [
        "A1", "A2", "A3", "A4",
        "B1", "B2", "B3", "B4",
        "C1", "C2", "C3", "C4"
    ];

    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showDate, setShowDate] = useState("");
    const [showTime, setShowTime] = useState("");

    const [customerName, setCustomerName] = useState("");
    const [mobile, setMobile] = useState("");

    const selectSeat = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };
    const bookTicket = async () => {

        if (!customerName || !mobile) {
            alert("Please Enter Name & Mobile Number");
            return;
        }

        if (!showDate || !showTime) {
            alert("Please Select Date & Time");
            return;
        }

        if (selectedSeats.length === 0) {
            alert("Please Select Seats");
            return;
        }

        navigate("/payment", {
            state: {
                customerName,
                mobile,
                movieName: movie.title,
                showDate,
                showTime,
                seats: selectedSeats,
                totalPrice: selectedSeats.length * movie.price,
            },
        });

    };
    return (
        <div
            className="container d-flex justify-content-center align-items-center py-5"
            style={{ minHeight: "100vh" }}
        >
            <div
                className="card shadow-lg p-4"
                style={{
                    maxWidth: "800px",
                    width: "100%",
                    borderRadius: "20px",
                }}
            >
                <h2>{movie.title}</h2>

                <img
                    src={movie.image}
                    alt={movie.title}
                    width="250"
                    className="mb-3"
                />

                <h5>Genre : {movie.genre}</h5>

                <h5>Language : {movie.language}</h5>

                <h5>Duration : {movie.duration}</h5>

                <h4 className="text-danger">
                    Ticket Price : ₹ {movie.price}
                </h4>

                <hr />

                <h4 className="text-primary fw-bold mb-3">
                    👤 Customer Details
                </h4>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Your Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />

                <hr />

                <label className="form-label fw-bold">
                    📅 Select Show Date
                </label>
                <input
                    type="date"
                    className="form-control mb-3"
                    value={showDate}
                    onChange={(e) => setShowDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                />

                <label className="form-label fw-bold">
                    🕒 Select Show Time
                </label>

                <select
                    className="form-select mb-4"
                    value={showTime}
                    onChange={(e) => setShowTime(e.target.value)}
                >
                    <option value="">Select Time</option>
                    <option>10:00 AM</option>
                    <option>1:00 PM</option>
                    <option>4:00 PM</option>
                    <option>7:00 PM</option>
                    <option>10:00 PM</option>
                </select>

                <hr />

                <h4 className="text-success fw-bold mb-3">
                    💺 Select Your Seats
                </h4>

                <div className="row">

                    {seats.map((seat) => (
                        <div className="col-3 mb-3" key={seat}>

                            <button
                                className={
                                    selectedSeats.includes(seat)
                                        ? "btn btn-danger w-100"
                                        : "btn btn-outline-success w-100"
                                }
                                onClick={() => selectSeat(seat)}
                            >
                                {seat}
                            </button>

                        </div>
                    ))}

                </div>

                <h5 className="mt-4">
                    Selected Seats :{" "}
                    {selectedSeats.length
                        ? selectedSeats.join(", ")
                        : "None"}
                </h5>

                <div
                    className="alert alert-success text-center fw-bold fs-4 mt-3"
                >
                    💰 Total Amount : ₹ {selectedSeats.length * movie.price}
                </div>
                <button
                    className="btn btn-danger mt-3"
                    onClick={bookTicket}
                >
                    Confirm Booking
                </button>
            </div>
        </div>
    );
}

export default Booking;