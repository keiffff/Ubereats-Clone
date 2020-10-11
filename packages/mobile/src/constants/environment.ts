export const environment = {
  hasuraGraphqlEndpoint: process.env.HASURA_GRAPHQL_ENDPOINT,
  authDomain: process.env.AUTH_DOMAIN,
  authClientId: process.env.AUTH_CLIENT_ID,
  authAudience: process.env.AUTH_AUDIENCE,
} as const;
