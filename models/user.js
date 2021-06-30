const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { capitalize } = require("./utils");

const UserSchema = Schema({
  firstName: {
    required: true,
    type: String,
    set: capitalize,
  },
  lastName: {
    type: String,
    required: true,
    set: capitalize,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    hash: { type: String, required: true },
    salt: { type: Number, required: true },
    required: true,
    type: String,
  },
  dateJoined: { type: Number, required: true },
  imgUrl: String,
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  giftsSent: [{ type: Schema.Types.ObjectId, ref: "Gift" }],
  giftsReceived: [{ type: Schema.Types.ObjectId, ref: "Gift" }],
});

module.exports = mongoose.model("User", UserSchema);
