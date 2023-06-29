import React, { useState, useEffect } from "react";

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
} from 'react-native';

import { useDeviceOrientation } from '@react-native-community/hooks'

import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  console.log(useDeviceOrientation());
  console.log(Dimensions.get('screen'))

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
