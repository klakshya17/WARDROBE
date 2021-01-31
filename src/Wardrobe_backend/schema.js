var mongoose = require("mongoose");

var ProfileSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  name: {
    type: String,
    required: [true, "password is required"],
  },
});

var ItemSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true], //tshirt
  },
  for: {
    type: String,
    required: [true], //men,women,kids
  },
  brand: {
    type: String,
    required: [true], //brands like levis etc
  },
  color: {
    type: String,
    required: [true],
  },
  price: {
    type: Number,
    required: [true],
  },
  size: {
    type: Array,
    required: [true], //[M, L ,S]
  },
  material: {
    type: String,
    required: [true], //cotton,wollen
  },
});
var WishlistSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true], //profile-id
  },
  list: {
    type: Array,
  },
});
var ShoppingBagSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true], //profile-id
  },
  list: {
    type: Array,
  },
});

var OrderSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true], //profile-id
  },
  items: {
    type: Array, //list of items
  },
  address: {
    type: Array,
    required: [true],
  },
});

module.exports = {
  Profile: mongoose.model("Profile", ProfileSchema, "profile"),
  Item: mongoose.model("Item", ItemSchema, "item"),
  Wishlist: mongoose.model("Wishlist", WishlistSchema, "wishlist"),
  ShoppingBag: mongoose.model("Shoppingbag", ShoppingBagSchema, "shoppingbag"),
  Order: mongoose.model("Order", OrderSchema, "order"),
};
