import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // const getLocation = async () => {
  //   try {
  //     const { granted } = await Location.requestBackgroundPermissionsAsync();
  //     if (!granted) return;
  //     const {
  //       coords: { latitude, longitude },
  //     } = await Location.getLastKnownPositionAsync();
  //     setLocation({ latitude, longitude });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      setLocation({latitude, longitude});
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return text;
};
