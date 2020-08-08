import React, { ComponentProps } from 'react';
import { ScrollView } from 'react-native';
import { FoodsList } from 'components/FoodsList';
import { LoadingView } from 'components/LoadingView';

type Props = {
  loading: boolean;
  foods?: ComponentProps<typeof FoodsList>['foods'];
};

export const Search = ({ loading, foods }: Props) => {
  return loading ? (
    <LoadingView />
  ) : !foods?.length ? (
    <></>
  ) : (
    <ScrollView>
      <FoodsList foods={foods} />
    </ScrollView>
  );
};
