import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { longitude, latitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log(error);
      const {
        coords: { longitude, latitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ longitude, latitude });
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
