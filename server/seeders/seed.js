const db = require('../config/connection');
const { User, Review, Artist, Concert, Venue } = require('../models');
const userSeeds = require('./userSeeds.json');
const reviewSeeds = require('./reviewSeeds.json');
const artistSeeds = require('./artistSeeds.json');
const concertSeeds = require('./concertSeeds.json');
const venueSeeds = require('./venueSeeds.json');

db.once('open', async () => {
  try {
    await Review.deleteMany({});
    await User.deleteMany({});
    await Artist.deleteMany({});
    await Concert.deleteMany({});
    await Venue.deleteMany({});

    await User.create(userSeeds);
    await Concert.create(concertSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, username } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }

    // for (let i = 0; i < venueSeeds.length; i++) {
    //   const { _id, venueName } = await Venue.create(venueSeeds[i]);
    //   const concert = await Concert.findOneAndUpdate(
    //     { venue: venueName },
    //     {
    //       $addToSet: {
    //         reviews: _id,
    //       },
    //     }
    //   );
    // }

    // for (let i = 0; i < reviewSeeds.length; i++) {
    //   const { _id, username } = await Review.create(reviewSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: username },
    //     {
    //       $addToSet: {
    //         reviews: _id,
    //       },
    //     }
    //   );
    // }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeded!');
  process.exit(0);
});
