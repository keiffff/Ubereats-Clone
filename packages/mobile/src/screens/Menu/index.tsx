import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { MenuDocument } from 'types/graphql';
import { LoadingView } from 'components/LoadingView';

export const Menu = () => {
  const { data, loading } = useQuery(MenuDocument);

  return loading || !data ? (
    <LoadingView />
  ) : (
    <View>
      <Text>menu</Text>
    </View>
  );
};
