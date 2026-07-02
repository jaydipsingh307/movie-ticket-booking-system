import { useLocation, useNavigate } from "react-router-dom";

function Success() {

    const { state } = useLocation();

    const navigate = useNavigate();

    if (!state) {

        return <h2>No Ticket Found</h2>;

    }

    return (

        <div className="container mt-5">

            <div
                className="card shadow-lg p-5 mx-auto"
                style={{ maxWidth: "650px" }}
            >

                <h1 className="text-center text-success">
                    ✅ Booking Successful
                </h1>

                <hr />

                <h3>{state.movieName}</h3>

                <p><b>Name :</b> {state.customerName}</p>

                <p><b>Mobile :</b> {state.mobile}</p>

                <p><b>Date :</b> {state.showDate}</p>

                <p><b>Time :</b> {state.showTime}</p>

                <p><b>Seats :</b> {state.seats.join(", ")}</p>

                <p><b>Payment :</b> {state.paymentMethod}</p>

                <h3 className="text-danger">
                    ₹ {state.totalPrice}
                </h3>

                <button

                    className="btn btn-primary mt-4"

                    onClick={() => navigate("/history")}

                >

                    View Ticket History

                </button>

            </div>

        </div>

    );

}

export default Success;