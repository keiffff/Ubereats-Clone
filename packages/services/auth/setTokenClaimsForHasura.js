function setTokenClaimsForHasura(user, context, callback) {
  const namespace = 'https://hasura.io/jwt/claims';
  context.accessToken[namespace] = {
    'x-hasura-default-role': 'user',
    'x-hasura-allowed-roles': ['user'],
    'x-hasura-user-email': user.email,
  };
  callback(null, user, context);
}
