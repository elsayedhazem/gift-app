const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { capitalize } = require("./utils");

const ItemSchema = Schema({
  title: { type: String, set: capitalize, required: true },
  description: String,
  imgUrl: String,
  price: { type: Number, required: true },
  voucherValue: Number, // Only set when item is a voucher
  store: { type: Schema.Types.ObjectId, ref: "Store", required: true },
  inStock: { type: Boolean, default: true },
});

module.exports = mongoose.model("Item", ItemSchema);
