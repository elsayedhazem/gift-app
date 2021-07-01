const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { capitalize } = require("./utils");

const SellerSchema = Schema({
  name: {
    required: true,
    type: String,
    set: capitalize,
  },
  dateJoined: { type: Number, required: true },
  imgUrl: String,
  representativeFirstName: {
    type: String,
    required: true,
    set: capitalize,
  },
  representativeEmail: {
    type: String,
    required: true,
    trim: true,
  },
  representativePassword: {
    hash: { type: String, required: true },
    salt: { type: Number, required: true },
    required: true,
    type: String,
  },
  sellerUUID: {
    hash: { type: String, required: true },
    salt: { type: Number, required: true },
    required: true,
    type: String,
  },
  stores: [{ type: Schema.Types.ObjectId, ref: "Store" }],
});

module.exports = mongoose.model("Seller", SellerSchema);
