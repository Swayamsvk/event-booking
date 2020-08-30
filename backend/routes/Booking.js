const router = require("express").Router();
let Booking = require("../models/Booking.model");

router.route("/").get((req, res) => {
  Booking.find()
    .then((booking) => res.json(booking))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const date = Date.parse(req.body.date);
  const price = Number(req.body.price);
  const place = req.body.place;
  const members = Number(req.body.members);

  const newBooking = new Booking({
    name,
    date,
    price,
    place,
    members,
  });
  newBooking
    .save()
    .then(() => res.json("Booking Added"))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Booking.findById(req.params.id)
    .then((booking) => res.json(booking))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").delete((req, res) => {
  Booking.findByIdAndDelete(req.params.id)
    .then(() => res.json("Booking deleted"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// router.route("/update/:id").post((req, res) => {
//   Booking.findById(req.params.id)
//     .then((booking) => {
//       booking.name = req.body.name;
//       booking.date = Date.parse(req.body.date);

//       booking.place = req.body.place;

//       booking
//         .save()
//         .then(() => res.json("Booking updated"))
//         .catch((err) => res.status(400).json("Error:" + err));
//     })
//     .catch((err) => res.status(400).json("Error" + err));
// });

module.exports = router;
