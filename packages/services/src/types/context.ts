import { ApolloServer } from 'apollo-server';

type Extends<T, U> = T extends U ? T : never;

type Session = Parameters<Extends<ConstructorParameters<typeof ApolloServer>[0]['context'], (...args: any) => any>>[0];

export type Context = GraphQLModules.Context & Pick<Session, 'req'>;
