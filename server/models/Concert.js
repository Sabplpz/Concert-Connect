const { Schema, model } = require("mongoose");

const concertSchema = new Schema(
  {
    concertName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    }
  },
);


const Concert = model("Concert", concertSchema);

module.exports = Concert;