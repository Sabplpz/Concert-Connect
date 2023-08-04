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
    await Artist.create(artistSeeds);
    await Concert.create(concertSeeds);
    await Venue.create(venueSeeds);

    for (let i = 0; i < reviewSeeds.length; i++) {
      const { _id, userId } = await Review.create(reviewSeeds[i]);
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            reviews: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Seeded!');
  process.exit(0);
});
