import React, { useState } from "react";

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
import RegisterScreen from "./app/screens/RegisterScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import LoginScreen from "./app/screens/LoginScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  console.log(useDeviceOrientation());
  console.log(Dimensions.get('screen'))

  return (
    <WelcomeScreen/>
  );
}
