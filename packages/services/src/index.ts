import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { createApplication } from 'graphql-modules';
import { commonModule, paymentModule } from 'modules';
import { app } from 'app';

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

app.listen({ port }, () => console.log(`🚀Server ready at http://localhost:${port}`));
