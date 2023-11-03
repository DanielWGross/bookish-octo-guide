const { GraphQLError } = require("graphql");
const { Profile } = require("../models");
const { signToken } = require("../utils/jwt");

const resolvers = {
  Query: {
    profiles: async () => Profile.find({}),
  },
  Mutation: {
    login: async (_, args) => {
      try {
        const profile = await Profile.findOne({
          email: args.email,
        });

        const passwordIsValid = await profile.isCorrectPassword(args.password);

        if (passwordIsValid) {
          const token = signToken({
            _id: profile._id,
            email: profile.email,
            name: profile.name,
          });

          return { token };
        }
      } catch (error) {
        return error;
      }
    },
    signup: async (_, args) => {
      try {
        const profile = await Profile.create(args);
        const token = signToken({
          _id: profile._id,
          email: profile.email,
          name: profile.name,
        });

        return { token };
      } catch (error) {
        return new GraphQLError("Invalid Sign Up", {
          extensions: {
            code: "BAD_USER_INPUT",
          },
        });
      }
    },
  },
};

module.exports = resolvers;
