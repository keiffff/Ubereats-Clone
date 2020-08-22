import { ApolloServer } from 'apollo-server';
import { GraphQLModule } from '@graphql-modules/core';
import helloModule from 'modules/hello';

const rootModule = new GraphQLModule({
  name: 'root',
  imports: [helloModule],
});

const server = new ApolloServer({ schema: rootModule.schema, introspection: true, playground: true });

server.listen({ port: process.env.PORT ?? 4000 }).then(({ url }) => console.log(`🚀Server ready at ${url}`));
