import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./app/screens/AuthScreen";
import "./global.css"
import Tabs from "./app/screens/Tabs"; // Tabs contains Home, Search, Favorites

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="tabs">
        <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
