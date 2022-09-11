const express = require("express");
const authRouter = express.Router();

const User = require("../../controllers/authController");

const { register, login } = require("../../controllers/authController");

authRouter.post("/login", login);
authRouter.post("/register", register);

module.exports = authRouter;
