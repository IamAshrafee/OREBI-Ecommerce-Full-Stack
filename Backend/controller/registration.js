const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");

async function registrationController(req, res) {
    try {
        const {
            firstName,
            lastName,
            email,
            telephone,
            address1,
            address2,
            city,
            postalCode,
            division,
            district,
            password,
        } = req.body;

        // Basic validation
        if (!firstName || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        // Password validation
        if (password.length < 6) {
            return res.status(400).json({ error: "Password must be at least 6 characters long" });
        }

        // Check if email already exists
        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash password
        const hash = await bcrypt.hash(password, 10);

        // Create new user with all fields
        const user = new userSchema({
            firstName,
            lastName,
            email,
            telephone,
            address1,
            address2,
            city,
            postalCode,
            division,
            district,
            password: hash,
        });

        // Save user
        await user.save();

        // Return success without password
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        res.status(201).json({
            status: "success",
            message: "Registration successful",
            data: userWithoutPassword
        });

    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Registration failed",
            error: error.message
        });
    }
}

module.exports = registrationController;
