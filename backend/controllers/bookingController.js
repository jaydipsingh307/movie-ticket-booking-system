const Booking = require("../models/Booking");

// Book Ticket

exports.bookTicket = async (req, res) => {

    try {

        const booking = await Booking.create(req.body);

        res.status(201).json({

            success: true,

            message: "Booking Successful",

            booking,

        });

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};

// Get All Bookings

exports.getBookings = async (req, res) => {

    try {

        const bookings = await Booking.find().sort({

            bookingDate: -1,

        });

        res.json(bookings);

    }

    catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};