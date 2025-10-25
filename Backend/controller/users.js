const userSchema = require("../models/userSchema");

async function usersController(req, res) {
  try {
    const users = await userSchema.find().select("-password");
    res.status(200).json({ users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = usersController;