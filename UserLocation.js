import React, { useEffect } from "react";
import { View, Text } from "react-native";
import * as Location from "expo-location";
import { db, setDoc, doc } from "./firebaseConfig";
import { requestLocationPermission } from "./permissions";
import { useRoute } from "@react-navigation/native";


const UserLocation = () => {

  const route = useRoute();
  const { userId } = route.params; 

  useEffect(() => {
    const trackLocation = async () => {
      const permission = await requestLocationPermission();
      if (!permission) return;

      Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 5000, distanceInterval: 10 },
        async (position) => {
          const { latitude, longitude } = position.coords;
          await setDoc(doc(db,userId, "users" ), {
            latitude,
            longitude,
            timestamp: new Date().toISOString(),
          });
        }
      );
    };

    trackLocation();
  }, [userId]);

  return (
    <View>
      <Text>Tracking location...</Text>
    </View>
  );
};

export default UserLocation;
