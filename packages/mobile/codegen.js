module.exports = {
  schema: [
    {
      [`${process.env.HASURA_GRAPHQL_ENDPOINT}`]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  documents: './src/**/*.graphql',
  overwrite: true,
  generates: {
    './src/types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        namingConvention: {
          transformUnderscore: true,
        },
        reactApolloVersion: 3,
        gqlImport: '@apollo/client#gql',
        skipTypename: false,
        withHooks: false,
        withHOC: false,
        withComponent: false,
      },
    },
  },
};
