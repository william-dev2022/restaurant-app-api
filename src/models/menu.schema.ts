import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: { type: String, required: true }, // e.g., 'Breakfast Menu'
  description: { type: String }, // Optional: 'Morning delights to start your day.'
  // tags: [{ type: String }],  e.g., ['breakfast', 'morning']
  discount: {
    amount: { type: Number, default: 0 }, // Discount percentage for all dishes in this menu
    validUntil: { type: Date }, // Optional: Expiry date for menu discount
  },
  createdAt: { type: Date, default: Date.now },
});

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;
