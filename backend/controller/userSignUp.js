const userModel =require('../models/userModel');
const bcrypt = require('bcryptjs');

async function userSignUpController(req, res) {
    try {
        const { email, password, name } = req.body;

        // Check for missing fields
        if (!email) {
            throw new Error("Please provide an email");
        }
        if (!password) {
            throw new Error("Please provide a password");
        }
        if (!name) {
            throw new Error("Please provide a name");
        }

        // Check if the email already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            throw new Error("Email already in use");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create the new user payload
        const payload = {
            email,
            name,
            password: hashPassword,
            role:"GENERAL",
            profilePic: req.body.profilePic || "" // Optional field
        };

        // Save the user to the database
        const userData = new userModel(payload);
        await userData.save();

        res.status(201).json({
            data: userData,
            success: true,
            error: false,
            message: "User created successfully"
        });

    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        });
    }
}

module.exports = userSignUpController;
