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
    concerts: [{
        type: Schema.Types.ObjectId,
        ref: 'Concert',
      },
    ],
  },
);


const Venue = model("Venue", venueSchema);

module.exports = Venue;