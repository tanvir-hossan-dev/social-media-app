const { Validation } = require("../helpers/Validaton");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userLogin = async (req, res) => {
  res.json({ Message: "This is user login" });
};

exports.userRegister = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!Validation(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "This email already in use" });
    }
    req.body.password = await bcrypt.hash(password, 10);
    const user = new User(req.body);
    await user.save();
    const accessToken = jwt.sign({ name: user.name, email: user.email, _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30 days",
    });
    res.status(200).json({ user, accessToken });
  } catch (err) {
    console.log(err);
  }
};
