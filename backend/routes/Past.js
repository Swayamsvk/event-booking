// const router = require("express").Router();
// let Event = require("../models/Past.model");
// // const passport = require('passport');
// // const JWT = require('jsonwebtoken');
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./uploads/");
//   },
//   filename: function (req, res, cb) {
//     cb(null, newDate().toISOString() + file.originalname);
//   },
// });

// const fileFilter = (req, file, cb) => {
//   //reject a file
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
//   fileFilter: fileFilter,
// });

// router.route("/").get((req, res) => {
//   Event.find()
//     .then((events) => res.json(events))
//     .catch((err) => res.status(400).json("Error:" + err));
// });

// router.route("/add", upload.single("eventImge")).post((req, res) => {
//   console.log(req.file);
//   const name = req.body.name;
//   const description = req.body.description;
//   const eventImage = req.file.path;

//   const newEvent = new Event({
//     name,
//     description,
//     eventImage,
//   });
//   newEvent
//     .save()
//     .then(() => res.json("Past Event Added"))
//     .catch((err) => res.status(400).json("Error:" + err));
// });

// module.exports = router;
