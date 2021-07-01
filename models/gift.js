const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiftSchema = Schema({
  items: [{ type: Schema.Types.ObjectId, ref: "Item" }],
  fromUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
  toUser: { type: Schema.Types.ObjectId, ref: "User", required: true },
  totalPaid: { type: Number, required: true },
  purchasedAt: { type: Number, required: true },
  redeemedAt: { type: Number, default: 0 }, // zero until it becomes a timestamp at redeem
});

module.exports = mongoose.model("Gift", GiftSchema);
