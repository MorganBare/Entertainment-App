const express = require("express");
const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
});

module.exports = authRouter;
