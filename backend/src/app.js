// import 'isomorphic-fetch';

import Koa from 'koa';
import convert from 'koa-convert';
import cors from 'kcors';
import graphqlHttp from 'koa-graphql';
import Router from 'koa-router';
import { koaPlayground } from 'graphql-playground-middleware';

import { getUser } from './auth';

import schema from './schema';
import registerLoaders from './registerLoaders';

const app = new Koa();
const router = new Router();

router.all(
  '/playground',
  koaPlayground({
    endpoint: '/graphql',
  }),
);

const graphqlSettingsPerReq = async req => {
  const { user } = await getUser(req.header.authorization);

  const dataloaders = registerLoaders();

  return {
    graphiql: true,
    schema,
    context: {
      req,
      dataloaders,
      user
    },
    formatError: error => {
      console.log(error.message);
      console.log(error.locations);
      console.log(error.stack);

      return {
        message: error.message,
        locations: error.locations,
        stack: error.stack,
      };
    },
  };
};

const graphqlServer = convert(graphqlHttp(graphqlSettingsPerReq));

// graphql standard route
router.all('/graphql', graphqlServer);

app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

export default app;
