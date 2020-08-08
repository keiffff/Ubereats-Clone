import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { windowProps } from 'constants/dimensions';

type Props = {
  foodName: string;
  photos: { uuid: string; photo: string }[];
  description: string;
};

export const FoodDetail = ({ foodName, photos, description }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const foodImageListItemWidth = windowProps.width / 4 - 16;

  return (
    <ScrollView>
      <Text style={styles.foodName}>{foodName}</Text>
      <Image source={{ uri: photos[selectedIndex].photo }} style={styles.foodImage} />
      <View style={styles.foodImageList}>
        {photos.map(({ uuid, photo }, i) => (
          <TouchableOpacity key={uuid} onPress={() => setSelectedIndex(i)}>
            <Image source={{ uri: photo }} style={[styles.foodImageListItem, { width: foodImageListItemWidth }]} />
          </TouchableOpacity>
        ))}
      </View>
      <Text>{description}</Text>
    </ScrollView>
  );
};
