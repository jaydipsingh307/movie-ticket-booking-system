const express = require("express");

const router = express.Router();

const {

    bookTicket,

    getBookings,

} = require("../controllers/bookingController");

router.post("/", bookTicket);

router.get("/", getBookings);

module.exports = router;