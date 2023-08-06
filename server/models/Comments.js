const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  text: {
    type: String,
  },
  username: {
    type: String,
  },
});

const Comments = model("Comments", commentsSchema);

module.exports = Comments;