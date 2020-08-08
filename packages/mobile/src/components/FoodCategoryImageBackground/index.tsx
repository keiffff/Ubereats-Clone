import React, { ComponentProps, useCallback } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  uuid: string;
  name: string;
  photo: string;
  onPressCategory: (uuid: string) => void;
} & Pick<ComponentProps<typeof ImageBackground>, 'style' | 'imageStyle'>;

export const FoodCategoryImageBackground = ({ uuid, name, photo, style, imageStyle, onPressCategory }: Props) => {
  const handlePressCategory = useCallback(() => onPressCategory(uuid), [onPressCategory, uuid]);

  return (
    <TouchableOpacity onPress={handlePressCategory}>
      <ImageBackground
        source={{ uri: photo }}
        style={[styles.baseImageBackground, style]}
        imageStyle={[styles.baseImage, imageStyle]}
      >
        <View style={styles.inner}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
