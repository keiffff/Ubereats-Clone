export const environment = {
  hasuraGraphqlEndpoint: process.env.HASURA_GRAPHQL_ENDPOINT ?? '',
  hasuraGraphqlAdminSecret: process.env.HASURA_GRAPHQL_ADMIN_SECRET ?? '',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? '',
} as const;
