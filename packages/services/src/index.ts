import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { createApplication } from 'graphql-modules';
import { commonModule, helloModule, paymentModule } from 'modules';

const app = createApplication({
  modules: [commonModule, helloModule, paymentModule],
});

const server = new ApolloServer({
  schema: app.schema,
  introspection: true,
  playground: true,
  executor: app.createExecution(),
});

server.listen({ port: process.env.PORT ?? 4000 }).then(({ url }) => console.log(`🚀Server ready at ${url}`));
