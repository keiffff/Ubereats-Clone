import { useContext as useContextOrigin, Context } from 'react';

export function useContext<T>(context: Context<T | null>) {
  const value = useContextOrigin(context);
  if (!value) {
    throw new Error('You must provide a value to the context');
  }

  return value;
}
