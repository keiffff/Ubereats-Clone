import React, { useEffect } from 'react';
import { Button } from 'react-native';

type Props = {
  onMounted: () => void;
};

export const Public = ({ onMounted }: Props) => {
  return <Button title="Click to Login" onPress={onMounted} />;
};
