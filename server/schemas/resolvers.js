const { Profile } = require("../models");

const resolvers = {
  Query: {
    profiles: async () => Profile.find({}),
  },
};

module.exports = resolvers;
