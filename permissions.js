import * as Location from "expo-location";

export const requestLocationPermission = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permission denied! Allow location access to continue.");
    return false;
  }
  return true;
};
