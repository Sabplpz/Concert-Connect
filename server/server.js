const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // context: authMiddleware,
  context: () => (  // --------------- For testing purposes --------------------------
    { user: 
      { 
        _id: 5000,
        firstName: 'Firsty',
        lastName: 'Lasty',
        username: 'Testmon',
        email: 'a@a.a',
        password: 'test123',
        concerts: [{
          "concertName": "Nitro",
          "city": "Fuan",
          "date": "2/26/2023",
          "genre": "Toughjoyfax"
        }],
        artists: [{
          "artistName": "Rafael Rusbridge",
          "genre": "Flexidy"
        }],
        venues: [{
          "venueName": "Sarcophilus harrisii",
          "city": "Iksan"
        }],
        reviews: [{
          "type": "Artist",
          "name": "Gallagher",
          "starRating": 2
        }],
        follow: [{
          "firstName": "Troy",
          "lastName": "Field",
          "username": "tfield0",
          "email": "tfield0@dropbox.com"
        }],
      } 
    }
  ) // --------------- For testing purposes --------------------------
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();