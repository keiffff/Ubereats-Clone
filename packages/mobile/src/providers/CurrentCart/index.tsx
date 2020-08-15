import React, { ReactNode, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GetCartByUserIdDocument } from './index.graphql';
import { useContext } from 'hooks/useContext';
import { useAuth } from 'providers/Auth';
import { LoadingView } from 'components/LoadingView';

type CurrentCartProviderContext = {
  cartUuid: string;
  cartFoods: { food: { name: string; price: number }; count: number }[];
};

type Props = {
  children: ReactNode;
};

const CurrentCartContext = createContext<CurrentCartProviderContext | null>(null);

export function useCurrentCart() {
  return useContext(CurrentCartContext);
}

export const CurrentCartProvider = ({ children }: Props) => {
  const { currentUserId } = useAuth();
  const { data, loading } = useQuery(GetCartByUserIdDocument, { variables: { userId: currentUserId } });

  return loading || !data ? (
    <LoadingView />
  ) : (
    <CurrentCartContext.Provider
      value={{
        cartUuid: data.carts[0]?.uuid ?? '',
        cartFoods: data.carts[0]?.cart_foods ?? [],
      }}
    >
      {children}
    </CurrentCartContext.Provider>
  );
};
