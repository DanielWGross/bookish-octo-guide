const path = require("path");
const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const {typeDefs, resolvers} = require("./schemas")
const db = require("./config/connection");
const { Profile } = require("./models")

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.get("/demo", async (req, res) => {
    const data = await Profile.find({});
    res.json(data);
  })
  
  app.use('/graphql', expressMiddleware(server));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  })
};

startApolloServer();