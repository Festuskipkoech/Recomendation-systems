import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TopBar from "./TopBar";

export default function Details() {
  return (
    <View style={styles.container}>
      <View>
        <TopBar />
      </View>
      <View style={styles.face}>
        <Text>Image here</Text>
      </View>
      <View style={styles.details}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  face: {
    flex: 1,
    borderWidth: 2,
    height:20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  details: {
    backgroundColor: "#B2BEB5",
    width: "100%",
    height: 20,
  },
});
