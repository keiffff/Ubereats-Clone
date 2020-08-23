import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { createApplication } from 'graphql-modules';
import { commonModule, paymentModule } from 'modules';

const app = createApplication({
  modules: [commonModule, paymentModule],
});

const server = new ApolloServer({
  schema: app.createSchemaForApollo(),
  context: ({ req }) => ({ req }),
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT ?? 4000 }).then(({ url }) => console.log(`🚀Server ready at ${url}`));
