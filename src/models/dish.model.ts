import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // URL for the dish image
  tags: [{ type: [String] }], // e.g., ['vegan', 'spicy', 'popular']
  menu: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }], // Links to a specific menu
  isAvailable: { type: Boolean, default: true }, // Boolean to check if the dish is available
  discount: {
    amount: { type: Number, default: 0 }, // Discount amount in %
    validUntil: { type: Date }, // Optional: Expiry date for the discount
  },
  ratings: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      rating: { type: Number, min: 1, max: 5 },
      review: { type: String },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  averageRating: { type: Number, default: 0 }, // Auto-calculated
  createdAt: { type: Date, default: Date.now },
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
