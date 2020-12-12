const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
  },

  image: {
    type: String,
    default:
      "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg",
  },

  date: {
    type: Date,
    default: Date.now,
  },

  content: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
