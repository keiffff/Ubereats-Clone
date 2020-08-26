import React from 'react';
import { View, Text, ScrollView, Modal, ActivityIndicator } from 'react-native';
import { styles } from './styles';

type Props = {
  open: boolean;
  orderedUserName: string;
  orderedItems: { count: number; name: string }[];
};

export const PlacingOrderModal = ({ open, orderedUserName, orderedItems }: Props) => {
  return (
    <Modal transparent visible={open}>
      <View style={styles.inner}>
        <ScrollView style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.placingOrderText}>Placing Order...</Text>
            <ActivityIndicator color="#4849ff" />
          </View>
          <View style={styles.content}>
            <Text style={styles.orderedUserNametext}>{`Your order, ${orderedUserName}`}</Text>
            {orderedItems.map(({ name, count }, i) => (
              <View key={i} style={styles.orderedItem}>
                <View style={styles.orderedCount}>
                  <Text>{count}</Text>
                </View>
                <Text numberOfLines={1}>{name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
