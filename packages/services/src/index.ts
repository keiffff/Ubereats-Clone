import { gql, ApolloServer } from 'apollo-server';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({ schema });

server.listen({ port: process.env.PORT ?? 4000 }).then(({ url }) => console.log(`🚀Server ready at ${url}`));
