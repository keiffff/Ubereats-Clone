import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Test } from "components/Test";

export const App = () => {
  return (
    <View style={styles.container}>
      <Test />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
