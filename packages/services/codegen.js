module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
    './src/modules/*/index.ts',
  ],
  documents: './src/**/*.graphql',
  overwrite: true,
  config: {
    scalars: {
      timestamptz: 'string',
      uuid: 'string',
      numeric: 'number',
    },
  },
  generates: {
    './src/types/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-operations', 'typed-document-node'],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
        enumsAsTypes: true,
        useIndexSignature: true,
        contextType: './context#Context',
      },
    },
  },
};
