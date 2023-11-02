const typeDefs = `
  type Profile {
    name: String
    color: String
    _id: ID
  }

  type Query {
    profiles: [Profile]
  }
`;

module.exports = typeDefs;
