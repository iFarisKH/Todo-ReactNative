import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Header() {
  return (
    <View style={styles.headr}>
      <Text style={styles.title}>My todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headr: {
    height: 80,
    paddingTop: 40,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
