const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    profilePic: String
}, {
    timestamps: true,
});

// Create the User model from the schema
const userModel = mongoose.model("User", userSchema);  // 'User' is usually capitalized

// Export the User model
module.exports = userModel;
