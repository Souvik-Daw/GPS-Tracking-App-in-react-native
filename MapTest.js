import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapTest = () => {
  return (
    <View style={styles.container}>
      <Text>Map Test</Text>
      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: 37.7749, // Default to San Francisco
          longitude: -122.4194,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "80%", // Ensure it takes up space
  },
});

export default MapTest;
