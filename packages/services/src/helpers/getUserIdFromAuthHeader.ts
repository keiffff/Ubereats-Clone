import jwtDecoder from 'jwt-decode';

export function getUserIdFromAuthHeader(value: string) {
  const token = value.replace('Bearer ', '');
  const decoded: any = jwtDecoder(token);

  return decoded['https://hasura.io/jwt/claims']['x-hasura-user-id'];
}
