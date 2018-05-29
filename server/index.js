const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/index");
const mongoose = require("mongoose");


mongoose.connect('mongodb://sajjad:test123@ds237620.mlab.com:37620/gql-ninja');
mongoose.connection.once("open", () => {
  console.log("Connected to database");
});


  // In the most basic sense, the ApolloServer can be started
  // by passing type definitions (typeDefs) and the resolvers
  // responsible for fetching the data for those types.
  const server = new ApolloServer({ typeDefs, resolvers });

  // This `listen` method launches a web-server.  Existing apps
  // can utilize middleware options, which we'll discuss later.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
