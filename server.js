const { ApolloServer } = require("apollo-server");
const { resolvers } = require("./graphql/resolvers");
const { typeDefs } = require("./graphql/typeDefs");
const connectDB = require("./Models/db");

connectDB();
const server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
