import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';

type Props = {
  onPressLogin: () => void;
};

export const Landing = ({ onPressLogin }: Props) => {
  return (
    <View style={styles.base}>
      <Image source={require('assets/restaurant-menu-green-icon.png')} style={styles.menuImage} />
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>Welcome to our restaurant</Text>
      </View>
      <View style={styles.captionSubContainer}>
        <Text style={styles.captionSub}>{`Order food and make reservations \n with one click.`}</Text>
      </View>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
