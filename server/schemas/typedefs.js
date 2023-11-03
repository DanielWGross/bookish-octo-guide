const typeDefs = `
  type Profile {
    _id: ID!
    name: String!
    email: String!
    password: String!
    skills: [String]
  }

  type Auth {
    token: String!
  }

  type Query {
    profiles: [Profile]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    signup(name: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
