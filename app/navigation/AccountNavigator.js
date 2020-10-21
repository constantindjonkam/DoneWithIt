import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screen/AccountScreen";
import MessagesScreen from "../screen/MessagesScreen";

const Stack = createStackNavigator();

export default AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
