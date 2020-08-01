function syncUserWithHasura(user, context, callback) {
  const upsertUserQuery = `
    mutation($firstName: String!, $lastName: String! ,$email: String!){
      insert_users(objects: [{
        first_name: $firstName,
        last_name: $lastName,
        email: $email,
      }], on_conflict: { constraint: users_email_key, update_columns: [] }) {
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
