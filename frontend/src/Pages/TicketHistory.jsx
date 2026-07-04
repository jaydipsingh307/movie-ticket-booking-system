import { useEffect, useState } from "react";

import axios from "axios";

function TicketHistory() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        const res = await axios.get(
            "https://movie-ticket-backend-5t6p.onrender.com/api/bookings"
        );

        setBookings(res.data);

    };

    return (

        <div className="container mt-5">

            <h2 className="mb-4">

                🎟 Ticket History

            </h2>

            <table className="table table-bordered table-hover">

                <thead>

                    <tr>

                        <th>Movie</th>

                        <th>Name</th>

                        <th>Date</th>

                        <th>Time</th>

                        <th>Seats</th>

                        <th>Amount</th>

                        <th>Payment</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        bookings.map((b) => (

                            <tr key={b._id}>

                                <td>{b.movieName}</td>

                                <td>{b.customerName}</td>

                                <td>{b.showDate}</td>

                                <td>{b.showTime}</td>

                                <td>{b.seats.join(", ")}</td>

                                <td>₹ {b.totalPrice}</td>

                                <td>{b.paymentStatus}</td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TicketHistory;
