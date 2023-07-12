import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionPresets } from '@react-navigation/stack';
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();
// gestureEnabled: true -----------> Add this to screenOptions for modal swipe down to work
const FeedNavigator = () => (
  <Stack.Navigator presentation="modal"  screenOptions={{...TransitionPresets.ModalSlideFromBottomIOS, }}> 
    <Stack.Screen name="Listings" component={ListingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} /> 
  </Stack.Navigator>
);

export default FeedNavigator;
