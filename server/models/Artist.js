const { Schema, model } = require("mongoose");

const artistSchema = new Schema(
  {
    artistName: {
      type: String,
      required: true,
    },
    concerts: [{
        type: Schema.Types.ObjectId,
        ref: 'Concert',
      },
    ],
    genre: {
      type: String,
      required: true,
    }
  },
);


const Artist = model("Artist", artistSchema);

module.exports = Artist;