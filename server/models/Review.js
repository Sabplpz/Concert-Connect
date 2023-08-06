const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  starRating: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
  },
  username: {
    type: String,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comments",
    },
  ],
  likes: {
    type: String,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
