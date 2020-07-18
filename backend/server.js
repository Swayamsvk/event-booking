const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
app.use(cookieParser());
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Mongodb connection established");
});

const eventRouter = require("./routes/Event");

const userRouter = require("./routes/User");

const authRoute = require("./routes/auth");

app.use("/user", userRouter);

app.use("/events", eventRouter);

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
