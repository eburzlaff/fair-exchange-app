import React, { useState, useEffect, useCallback } from "react";

import { 
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Image,
  SafeAreaView,
  ToastAndroid,
  Alert,
  StatusBar,
  Button,
  Dimensions,
  Platform
} from "react-native";

import AppLoading from 'expo-app-loading';

import { useDeviceOrientation } from "@react-native-community/hooks";

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import * as SplashScreen from 'expo-splash-screen';
import { navigationRef } from "./app/navigation/rootNavigation";

export default function App() {
  console.log(useDeviceOrientation());
  console.log(Dimensions.get('screen'))

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  // Restores the user object when the app is restarted and sets the state var, which is being used in the app context 
  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  useEffect(() => {
    // Keep splash screen until user is restored and and set the isReady state var to true
    async function prepare() {
        try {
          await SplashScreen.preventAutoHideAsync();
          await restoreUser();
        } catch (error) {
            console.log("Error loading app", error);
        } finally {
            setIsReady(true);
        }
    }
    prepare();
  }, []);

  const onNavigationContainerReady = useCallback(async () => {
      if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  console.log(isReady);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme} onReady={onNavigationContainerReady}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      
    </AuthContext.Provider>
  );
}
