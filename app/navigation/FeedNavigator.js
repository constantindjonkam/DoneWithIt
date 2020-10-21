import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screen/ListingsScreen";
import ListingDetailsScreen from "../screen/ListingDetailsScreen";

const Stack = createStackNavigator();

export default FeedNavigator = () => (
  <Stack.Navigator
    mode="modal"
    screenOptions={{ gestureEnabled: true, headerShown: false }}
  >
    <Stack.Screen name="Listing" component={ListingsScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);
