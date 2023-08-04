const { Schema, model } = require("mongoose");

const venueSchema = new Schema(
  {
    venueName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
);


const Venue = model("Venue", venueSchema);

module.exports = Venue;