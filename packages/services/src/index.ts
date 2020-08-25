import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';
import { commonModule, paymentModule } from 'modules';

const app = express();

const rootModule = createApplication({
  modules: [commonModule, paymentModule],
});

const server = new ApolloServer({
  schema: rootModule.createSchemaForApollo(),
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

const port = process.env.PORT ?? 4000;

app.listen({ port }, () => console.log(`🚀Server ready at http://localhost:${port}${server.graphqlPath}`));
