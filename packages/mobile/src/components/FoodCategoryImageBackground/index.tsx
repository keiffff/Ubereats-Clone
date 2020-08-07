import React, { ComponentProps } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { styles } from './styles';

type Props = {
  name: string;
  photo: string;
} & Pick<ComponentProps<typeof ImageBackground>, 'style' | 'imageStyle'>;

export const FoodCategoryImageBackground = ({ name, photo, style, imageStyle }: Props) => {
  return (
    <ImageBackground
      source={{ uri: photo }}
      style={[styles.baseImageBackground, style]}
      imageStyle={[styles.baseImage, imageStyle]}
    >
      <View style={styles.inner}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </ImageBackground>
  );
};
