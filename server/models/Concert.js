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
      type: Schema.Types.ObjectId,
      ref: 'Artist',
    },
    venue: {
      type: Schema.Types.ObjectId,
      ref: 'Venue',
    },
    genre: {
      type: String,
      required: true,
    }
  },
);


const Concert = model("Concert", concertSchema);

module.exports = Concert;