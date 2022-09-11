const bcrypt = require("bcryptjs");
// bcrypt docs https://www.npmjs.com/package/bcrypt
const jwt = require("jsonwebtoken");
// jwt docs https://www.npmjs.com/package/jsonwebtoken

const User = require("../models/UserModel");

module.exports = {
  // The below syntax pretty much never changes.
  register: async (req, res) => {
    // I am doing extra checks on this project because on the figma files, they want errors to show up when the password checks fail.
    try {
      console.log(req.body);
      // 1. get email and password from req.body
      const { email, password } = req.body;

      // 2. Validate
      if (!email || !password) {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });
      }
      if (password.length < 5) {
        return res.status(400).json({
          msg: "The password needs to be at least 5 characters long.",
        });
      }

      // 3. Check for an existing user in the database
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res
          .status(400)
          .json({ msg: "An account with this email already exists." });
      }

      // 4. Hash the password. The higher the number, the more secure the password is.
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);

      // 5. Create a new user in the database
      const newUser = User.create({
        email,
        password: passwordHash,
      });

      // 6. The .send() method sends a JSON response with whatever you want back to the frontend. Go to SignUp.jsx and look for {data} on line 27. This data object is holding the the code on line 44
      // { status: "success", msg: "User created" }
      res.status(200).send({ status: "success", msg: "User created" });
    } catch (err) {
      res.status(500).json({ error: "This is failing" });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // 1. Validate
      if (!email || !password) {
        return res
          .status(400)
          .json({ msg: "Not all fields have been entered." });
      }

      // 2. Check for an existing user in the database
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) {
        return res
          .status(400)
          .json({ msg: "No account with this email has been registered." });
      }

      // 3. Check if the password is correct
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials." });
      }

      // 4. If the password is correct, create a token
      // 4a. Be careful here because mongo generates an _id not an id
      const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
      res.status(200).json({
        token,
        status: "success",
        user: {
          id: existingUser._id,
          email: existingUser.email,
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
