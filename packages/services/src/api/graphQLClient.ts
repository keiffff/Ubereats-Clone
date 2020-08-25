import { GraphQLClient } from 'graphql-request';
import { environment } from 'constants/environment';

export const hasuraClient = new GraphQLClient(environment.hasuraGraphqlEndpoint, {
  headers: {
    'x-hasura-admin-secret': environment.hasuraGraphqlAdminSecret,
  },
});
