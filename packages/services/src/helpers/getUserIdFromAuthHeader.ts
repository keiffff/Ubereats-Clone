import jwtDecoder from 'jwt-decode';

export function getUserIdFromAuthHeader(value: string): string | undefined {
  const token = value.replace('Bearer ', '');
  const decoded: any = jwtDecoder(token);
  const hasuraClaims = decoded['https://hasura.io/jwt/claims'];

  return hasuraClaims ? hasuraClaims['x-hasura-user-id'] : undefined;
}
