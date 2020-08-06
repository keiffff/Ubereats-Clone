import React, { useState, useMemo, ComponentProps, useRef, useCallback } from 'react';
import { View, Text, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './styles';

type Props = {
  categories: (Pick<ItemProps, 'name' | 'photo'> & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  width: number;
  totalItemCount: number;
  currentIndex: number;
  onScrollToIndex: (index: number) => void;
};

export const BestDealsList = ({ categories }: Props) => {
  const flatListRef = useRef<FlatList<Props['categories'][number]>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useMemo(() => Dimensions.get('window'), []);
  const onViewRef = useRef<NonNullable<ComponentProps<typeof FlatList>['onViewableItemsChanged']>>(
    ({ viewableItems }) => {
      if (!viewableItems.length) return;
      setCurrentIndex(viewableItems[0]?.index ?? 0);
    },
  );
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const handleScrollToIndex = useCallback((index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ animated: true, index });
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={categories}
      renderItem={({ item }) => (
        <Item
          {...item}
          width={width}
          currentIndex={currentIndex}
          totalItemCount={categories.length}
          onScrollToIndex={handleScrollToIndex}
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

const Item = ({ name, photo, width, currentIndex, totalItemCount, onScrollToIndex }: ItemProps) => {
  return (
    <ImageBackground
      source={{ uri: photo }}
      style={[styles.itemImageBackground, { width }]}
      imageStyle={styles.itemImage}
    >
      <View style={styles.itemInner}>
        <Text style={styles.itemName}>{name}</Text>
      </View>
      <View style={styles.indicatorContainer}>
        {[...Array(totalItemCount)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.indicator,
              i === currentIndex && styles.indicatorActive,
              i + 1 === totalItemCount && styles.indicatorLast,
            ]}
            onPress={() => onScrollToIndex(i)}
          />
        ))}
      </View>
    </ImageBackground>
  );
};
