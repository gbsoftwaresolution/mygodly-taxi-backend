const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../db/models/user.model");
const config = require("../../config/config");

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ message: "Email already registered" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    res.status(201).json({ id: user.id, email: user.email });
  }
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password").exists(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, config.jwt.secret, {
      expiresIn: config.jwt.expiration,
    });
    res.json({ token });
  }
);

module.exports = router;
