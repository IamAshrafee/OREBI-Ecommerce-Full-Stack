const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const existingUser = await userSchema.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const matchPass = await bcrypt.compare(password, existingUser.password);

    if (!matchPass) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    } else {
      const token = jwt.sign(
        {
          id: existingUser._id,
          email: existingUser.email,
          role: existingUser.role,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      return res.status(200).json({
        message: "Login success",
        token,
        user: {
          id: existingUser._id,
          email: existingUser.email,
          role: existingUser.role,
        },
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = loginController;
