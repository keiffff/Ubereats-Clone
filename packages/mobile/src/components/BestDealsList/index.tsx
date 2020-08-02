import React, { useState, useMemo, ComponentProps, useRef } from 'react';
import { View, Text, FlatList, ImageBackground, Dimensions } from 'react-native';
import { styles } from './styles';

type Props = {
  categories: (Pick<ItemProps, 'name' | 'photo'> & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  width: number;
  totalItemCount: number;
  inView: boolean;
  lastItem: boolean;
};

export const BestDealsList = ({ categories }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useMemo(() => Dimensions.get('window'), []);
  const onViewRef = useRef<NonNullable<ComponentProps<typeof FlatList>['onViewableItemsChanged']>>(
    ({ viewableItems }) => {
      if (!viewableItems.length) return;
      setCurrentIndex(viewableItems[0]?.index ?? 0);
    },
  );
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => (
        <Item
          {...item}
          width={width}
          inView={index === currentIndex}
          totalItemCount={categories.length}
          lastItem={categories.length === index + 1}
        />
      )}
      keyExtractor={(item) => item.uuid}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled
      getItemLayout={(_, index) => ({
        length: width,
        offset: width * index,
        index,
      })}
      snapToInterval={width}
      bounces={false}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

const Item = ({ name, photo, width }: ItemProps) => {
  return (
    <ImageBackground
      source={{ uri: photo }}
      style={[styles.itemImageBackground, { width }]}
      imageStyle={styles.itemImage}
    >
      <View style={styles.itemInner}>
        <Text style={styles.itemName}>{name}</Text>
      </View>
      {/* <View style={styles.indicatorContainer}>
        {[...Array(totalItemCount)].map((i) => (
          <View
            key={i}
            style={[styles.indicator, inView && styles.indicatorActive, lastItem && styles.indicatorLast]}
          />
        ))}
      </View> */}
    </ImageBackground>
  );
};
