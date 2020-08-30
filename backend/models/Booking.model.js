const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true },
    price: { type: Number, required: true },
    place: { type: String, required: true },
    members: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
