import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screen/LoginScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createStackNavigator();

export default AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
