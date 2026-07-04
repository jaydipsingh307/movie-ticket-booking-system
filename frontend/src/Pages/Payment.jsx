import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Payment() {

    const { state } = useLocation();
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState("");

    if (!state) {
        return <h2 className="text-center mt-5">No Booking Found</h2>;
    }

    const payNow = async () => {

        if (!paymentMethod) {
            alert("Please Select Payment Method");
            return;
        }

        try {

            await axios.post("https://movie-ticket-backend-5t6p.onrender.com/api/bookings", {

                customerName: state.customerName,
                mobile: state.mobile,
                movieName: state.movieName,
                seats: state.seats,
                showDate: state.showDate,
                showTime: state.showTime,
                totalPrice: state.totalPrice,
                paymentMethod,
                paymentStatus: "Success"

            });

            alert("Payment Successful ✅");

            navigate("/success", {

                state: {

                    ...state,
                    paymentMethod,
                    paymentStatus: "Success"

                }

            });

        } catch (error) {

            console.log(error);

            alert("Payment Failed");

        }

    };

    return (

        <div className="container py-5">

            <div
                className="card shadow-lg p-4 mx-auto"
                style={{ maxWidth: "650px", borderRadius: "15px" }}
            >

                <h2 className="text-center text-primary mb-4">
                    💳 Payment
                </h2>

                <h4>{state.movieName}</h4>

                <hr />

                <p><b>Customer :</b> {state.customerName}</p>

                <p><b>Mobile :</b> {state.mobile}</p>

                <p><b>Date :</b> {state.showDate}</p>

                <p><b>Time :</b> {state.showTime}</p>

                <p><b>Seats :</b> {state.seats.join(", ")}</p>

                <h3 className="text-danger">
                    Amount : ₹ {state.totalPrice}
                </h3>

                <hr />

                <h5>Select Payment Method</h5>

                <div className="form-check mt-3">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="UPI"
                        name="payment"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label">UPI</label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="Credit Card"
                        name="payment"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label">Credit Card</label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="Debit Card"
                        name="payment"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label">Debit Card</label>
                </div>

                <div className="form-check mb-4">
                    <input
                        className="form-check-input"
                        type="radio"
                        value="Cash"
                        name="payment"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <label className="form-check-label">Cash</label>
                </div>

                <button
                    className="btn btn-success btn-lg w-100"
                    onClick={payNow}
                >
                    Pay Now
                </button>

            </div>

        </div>

    );

}

export default Payment;