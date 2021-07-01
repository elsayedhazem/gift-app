const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { capitalize } = require("./utils");

const StoreSchema = Schema({
  seller: { type: Schema.Types.ObjectId, ref: "Seller", required: true },
  label: { type: String, required: true },
  storeUUID: {
    hash: { type: String, required: true },
    salt: { type: Number, required: true },
    required: true,
    type: String,
  },
  location: {
    country: { type: String, required: true, set: capitalize },
    state: { type: String, required: true, set: capitalize },
    city: { type: String, required: true, set: capitalize },
    zip: { type: Number, required: true },
    address: { type: String, required: true },
    lat: Number,
    lng: Number,
  },
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  giftsPending: [{ type: Schema.Types.ObjectId, ref: "Gift" }],
  giftsRedeemed: [{ type: Schema.Types.ObjectId, ref: "Gift" }],
});

module.exports = mongoose.model("Store", StoreSchema);
