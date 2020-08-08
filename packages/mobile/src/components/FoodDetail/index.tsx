import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import { styles } from './styles';

type Props = {
  foodName: string;
  photos: { uuid: string; photo: string }[];
  description: string;
};

export const FoodDetail = ({ foodName, photos, description }: Props) => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.foodName}>{foodName}</Text>
      </View>
      <View>
        <Image source={{ uri: photos[0].photo }} />
      </View>
      <View>
        {photos.map(({ uuid, photo }) => (
          <Image key={uuid} source={{ uri: photo }} />
        ))}
      </View>
      <Text>{description}</Text>
    </ScrollView>
  );
};
