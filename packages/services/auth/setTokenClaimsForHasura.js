function setTokenClaimsForHasura(user, context, callback) {
  const namespace = 'https://hasura.io/jwt/claims';
  context.accessToken[namespace] = {
    'x-hasura-default-role': 'user',
    'x-hasura-allowed-roles': ['user'],
    'x-hasura-user-id': user.user_id,
  };
  callback(null, user, context);
}
