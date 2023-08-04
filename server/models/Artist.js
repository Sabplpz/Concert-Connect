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
    ]
  },
);


const Artist = model("Artist", artistSchema);

module.exports = Artist;