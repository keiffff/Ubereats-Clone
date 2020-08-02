import React from 'react';
import { Landing } from 'screens/Landing';

type Props = {
  onPressLogin: () => void;
};

export const Public = ({ onPressLogin }: Props) => {
  return <Landing onPressLogin={onPressLogin} />;
};
