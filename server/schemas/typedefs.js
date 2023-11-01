const typeDefs = `
  type Andrew {
    skill: String
    id: ID
  }

  type Query {
    andrew: Andrew
  }
`;

module.exports = typeDefs;
