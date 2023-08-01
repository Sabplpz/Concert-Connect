const { Schema, model } = require("mongoose");

const reviewSchema = new Schema(
  {
    type: {
        type: String,
        required: true,
    },
    name: {
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
    userId: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
);


const Review = model("Review", reviewSchema);

module.exports = Review;