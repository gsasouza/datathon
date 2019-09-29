import { GraphQLString, GraphQLNonNull, GraphQLBoolean } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';

import User from '../UserModel';
import { generateToken } from '../../../auth';

export default mutationWithClientMutationId({
  name: 'CreateUser',
  inputFields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isOwner: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ name, email, password, isOwner }) => {
    let user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return {
        token: null,
        error: 'EMAIL_ALREADY_IN_USE',
      };
    }

    user = new User({
      name,
      email,
      password,
      isOwner,
    });
    await user.save();

    return {
      token: generateToken(user),
      error: null,
    };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});
