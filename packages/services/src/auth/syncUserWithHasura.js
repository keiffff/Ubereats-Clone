function syncUserWithHasura(user, context, callback) {
  const upsertUserQuery = `
    mutation($id: String!, $firstName: String!, $lastName: String! ,$email: String!){
      insert_users(objects: [{
        id: $id,
        first_name: $firstName,
        last_name: $lastName,
        email: $email,
      }], on_conflict: { constraint: users_pkey, update_columns: [] }) {
        affected_rows
      }
    }`;

  request.post(
    {
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret': configuration.HASURA_GRAPHQL_ADMIN_SECRET,
      },
      url: configuration.HASURA_GRAPHQL_ENDPOINT,
      body: JSON.stringify({
        query: upsertUserQuery,
        variables: {
          id: user.user_id,
          firstName: user.given_name,
          lastName: user.family_name,
          email: user.email,
        },
      }),
    },
    () => {
      callback(null, user, context);
    },
  );
}
