import React, { useState, ComponentProps, useRef, useCallback } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { FoodCategoryImageBackground } from 'components/FoodCategoryImageBackground';
import { windowProps } from 'constants/dimensions';
import { styles } from './styles';

type Props = {
  categories: (Pick<ItemProps, 'name' | 'photo'> & { uuid: string })[];
};

type ItemProps = {
  name: string;
  photo: string;
  width: number;
};

export const BestDealsList = ({ categories }: Props) => {
  const flatListRef = useRef<FlatList<Props['categories'][number]>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const { width } = windowProps;

  return (
    <View style={styles.base}>
      <FlatList
        ref={flatListRef}
        data={categories}
        renderItem={({ item }) => <FoodCategoryImageBackground {...item} style={{ width }} />}
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
      <View style={styles.indicatorContainer}>
        {[...Array(categories.length)].map((_, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.indicator,
              i === currentIndex && styles.indicatorActive,
              i + 1 === categories.length && styles.indicatorLast,
            ]}
            onPress={() => handleScrollToIndex(i)}
          />
        ))}
      </View>
    </View>
  );
};
