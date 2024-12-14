import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // Optional for third-party logins
  googleId: { type: String, unique: true, sparse: true }, // For Google login
  profilePicture: { type: String }, // URL for the user's profile picture
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"], // E.164 format or a suitable regex
  },
  verificationCode: { type: String }, // The verification code sent via SMS
  isVerified: { type: Boolean, default: false }, // Checks if the phone number is verified
  bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dish" }], // Example field for bookmarks
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);
export default User;
