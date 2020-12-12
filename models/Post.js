const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
  },

  subtitle: String,

  date: {
    type: Date,
    default: Date.now,
  },

  content: {
    type: String,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
