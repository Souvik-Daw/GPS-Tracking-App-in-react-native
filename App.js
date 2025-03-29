import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import UserLocation from "./UserLocation.js";
import AdminPanel from "./AdminPanel.js";
import MapTest from "./MapTest.js";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  const navigation = useNavigation();
  const [userId, setuserId] = useState(""); // Store button value

  const handlePress = (value) => {
    setuserId(value); // Store button title
    navigation.navigate("UserLocation", { userId: value }); // Pass as parameter
  };

  return (
    <View style={styles.container}>
      <Button title="Test Driver 1 " onPress={() => handlePress("Test_user_1")} />
      <View style={{ marginVertical: 10 }} />
      <Button title="Test Driver 2 " onPress={() => handlePress("Test_user_2")} />
    </View>
  );


  //  const handlePress = (value) => {
  //   setuserId(value); // Store button title
  //   navigation.navigate("AdminPanel", { userId: value }); // Pass as parameter
  // };

  // return (
  //   <View style={styles.container}>
  //     <Button title="Track Test Driver 1 " onPress={() => handlePress("Test_user_1")} />
  //     <View style={{ marginVertical: 10 }} />
  //     <Button title="Track Test Driver 2 " onPress={() => handlePress("Test_user_2")} />
  //   </View>
  // );
  
};

const AppStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="App" component={App} />
      <Stack.Screen name="UserLocation" component={UserLocation} /> 
      {/* <Stack.Screen name="AdminPanel" component={AdminPanel} /> */}
    </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centers vertically
    alignItems: "center", // Centers horizontally
    backgroundColor: "#f5f5f5",
  },
  buttonContainer: {
    width: 200,  // Ensures button is properly aligned
    height: 50,  // Optional: Adjust button height
    justifyContent: "center", 
    alignItems: "center",
  },
});

export default AppStack;
