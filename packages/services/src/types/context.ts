import { ApolloServerExpressConfig } from 'apollo-server-express';

type Session = Parameters<Extract<ApolloServerExpressConfig['context'], (...args: any) => any>>[0];

export type Context = GraphQLModules.Context & Pick<Session, 'req'>;
