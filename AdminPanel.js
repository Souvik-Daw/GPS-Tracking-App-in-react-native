import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useRoute } from "@react-navigation/native";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [userTracks, setUserTracks] = useState({}); 

  const route = useRoute();
    const { userId } = route.params;

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, userId), (snapshot) => {
      const locationData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(locationData);

      setUserTracks((prevTracks) => {
        const newTracks = { ...prevTracks };
        locationData.forEach((user) => {
          if (!newTracks[user.id]) newTracks[user.id] = [];
          newTracks[user.id] = [
            ...newTracks[user.id],
            { latitude: user.latitude, longitude: user.longitude },
          ].slice(-10); // Keep only last 10 locations
        });
        return newTracks;
      });
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Admin Panel - User Tracking</Text>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={{
          latitude: 22.5726,
          longitude: 88.3639,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Render Markers */}
        {users.map((user) => (
          <Marker
            key={user.id}
            coordinate={{ latitude: user.latitude, longitude: user.longitude }}
            title={`User: ${user.id}`}
          />
        ))}

        {/* Render Movement History (Tail) */}
        {Object.keys(userTracks).map((userId) => (
          <Polyline
            key={userId}
            coordinates={userTracks[userId]}
            strokeWidth={4}
            strokeColor="blue"
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default AdminPanel;
