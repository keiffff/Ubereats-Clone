import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GetUserByIdDocument } from 'types/graphql';
import { useAuth } from 'providers/Auth';
import { LoadingView } from './LoadingView';

export const Test = () => {
  const { currentUserId } = useAuth();
  const { data, loading } = useQuery(GetUserByIdDocument, { variables: { id: currentUserId } });

  return (
    <View style={styles.container}>
      {loading ? <LoadingView /> : <Text>{`You are now logged in as ${data?.users_by_pk?.first_name}`}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
