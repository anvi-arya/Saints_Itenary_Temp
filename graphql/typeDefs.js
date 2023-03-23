const { ApolloServer, gql } = require("apollo-server");
const { SaintsItenary } = require("../Models/Saints_Itenary");

const typeDefs = gql`
  type Info {
    loc: String
    name: String
    country: String
    state: String
    description: String
    best_weather: String
    time_to_visit: String
  }
  input InfoInput {
    loc: String
    name: String
    country: String
    state: String
    description: String
    best_weather: String
    time_to_visit: String
  }
  type LikeMetrices {
    location: String
    visuals: String
    tourist_friendly: Boolean
    other: String
  }
  input LikeMetricesInput {
    location: String
    visuals: String
    tourist_friendly: Boolean
    other: String
  }
  type Review {
    userid: ID
    comment: String
    like_metrices: LikeMetrices
  }
  input ReviewInput {
    userid: ID
    comment: String
    like_metrices: LikeMetricesInput
  }

  type SaintsItenary {
    _id: ID
    createdAt: String
    updatedAt: String
    deleted: Boolean
    Experience_id: ID
    UserId: ID
    postLink: String
    Info: Info
    Images: [String]
    Videos: [String]
    Reviews: [Review]
  }
  input SaintsItenaryInput {
    _id: ID
    createdAt: String
    updatedAt: String
    deleted: Boolean
    Experience_id: ID
    UserId: ID
    Info: InfoInput
    postLink: String
    Images: [String]
    Videos: [String]
    Reviews: [ReviewInput]
  }
  type Query {
    getAll: [SaintsItenary]
  }
  type Mutation {
    addSaintsItenary(input: SaintsItenaryInput): SaintsItenary
    updateSaintsItenary(input: SaintsItenaryInput): SaintsItenary
    deleteSaintsItenary(input: SaintsItenaryInput): SaintsItenary
  }
`;
module.exports = {
  typeDefs,
};
