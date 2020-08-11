import React, { ReactNode, createContext } from 'react';
import { useQuery } from '@apollo/client';
import { GetUserByIdDocument } from './index.graphql';
import { useContext } from 'hooks/useContext';
import { useAuth } from 'providers/Auth';
import { LoadingView } from 'components/LoadingView';

type CurrentUserProviderContext = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
};

type Props = {
  children: ReactNode;
};

const CurrentUserContext = createContext<CurrentUserProviderContext | null>(null);

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}

export const CurrentUserProvider = ({ children }: Props) => {
  const { currentUserId } = useAuth();
  const { data, loading } = useQuery(GetUserByIdDocument, { variables: { id: currentUserId } });

  return loading || !data ? (
    <LoadingView />
  ) : (
    <CurrentUserContext.Provider
      value={{
        userId: data.users_by_pk?.id ?? '',
        email: data.users_by_pk?.email ?? '',
        firstName: data.users_by_pk?.first_name ?? '',
        lastName: data.users_by_pk?.last_name ?? '',
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
