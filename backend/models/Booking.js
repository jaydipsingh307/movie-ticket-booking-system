const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true,
    },

    mobile: {
        type: String,
        required: true,
    },

    movieName: {
        type: String,
        required: true,
    },

    seats: [
        {
            type: String,
        },
    ],

    showDate: {
        type: String,
        required: true,
    },

    showTime: {
        type: String,
        required: true,
    },

    totalPrice: {
        type: Number,
        required: true,
    },

    paymentMethod: {
        type: String,
        default: "Cash",
    },

    paymentStatus: {
        type: String,
        default: "Success",
    },

    bookingDate: {
        type: Date,
        default: Date.now,
    },

});

module.exports = mongoose.model("Booking", bookingSchema);