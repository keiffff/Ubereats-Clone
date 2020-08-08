import React from 'react';
import { ScrollView } from 'react-native';
// import { useQuery } from '@apollo/client';
import { FoodsList } from 'components/FoodsList';
// import { LoadingView } from 'components/LoadingView';

export const Search = () => {
  // const { loading, data } = useQuery();

  return (
    <ScrollView>
      <FoodsList foods={[]} />
    </ScrollView>
  );
};
