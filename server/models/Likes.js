const { Schema, model } = require("mongoose");

const likesSchema = new Schema({
  reviewId: {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
  likes_count: Number,
  users: [
    {
      type: String,
    },
  ],
});

const Likes = model("Likes", likesSchema);

module.exports = Likes;
