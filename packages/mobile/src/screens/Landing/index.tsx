import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onPressLogin: () => void;
};

export const Landing = ({ onPressLogin }: Props) => {
  return (
    <View>
      <Image source={require('assets/restaurant-menu-green-icon.png')} />
      <Text>Welcome to our restaurant</Text>
      <Text>Order food and make reservations with one click.</Text>
      <TouchableOpacity onPress={onPressLogin}>
        <Text>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
