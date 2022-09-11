const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");

const authRouter = require("../routes/auth/authRouter");
app.use("/auth", authRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  if (err) throw err;
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
