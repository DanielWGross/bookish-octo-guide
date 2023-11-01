const resolvers = {
  Query: {
    andrew: async () => {
      return {
        skill: "Coding",
        id: 123457534523452
      }
    },
  },
};

module.exports = resolvers;
