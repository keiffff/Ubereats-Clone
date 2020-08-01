import { HASURA_GRAPHQL_ENDPOINT, AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_AUDIENCE } from '@env';

export const environment = {
  hasuraGraphqlEndpoint: HASURA_GRAPHQL_ENDPOINT,
  authDomain: AUTH_DOMAIN,
  authClientId: AUTH_CLIENT_ID,
  authAudience: AUTH_AUDIENCE,
} as const;
