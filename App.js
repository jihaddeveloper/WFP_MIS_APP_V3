//  Author: Mohammad Jihad Hossain
//  Create Date: 17/04/2021
//  Modify Date: 10/11/2021
//  Description: Application index file

// Library import
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Navigation
const Stack = createNativeStackNavigator();

// Screen import
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeScreen from "./screens/HomeScreen";
import BanglaClassObservationScreen from "./screens/BanglaClassObservationScreen";
import LibraryManagementObservationScreen from "./screens/LibraryManagementObservationScreen";
import LibraryReadingActivitiesObservationScreen from "./screens/LibraryReadingActivitiesObservationScreen";
import MonthlyBookCheckoutScreen from "./screens/MonthlyBookCheckoutScreen";
import OverallSchoolObservationScreen from "./screens/OverallSchoolObservationScreen";
import HomeScreen2 from "./screens/HomeScreen2";
import LoginScreen2 from "./screens/LoginScreen2";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen
          name="BanglaClass"
          component={BanglaClassObservationScreen}
        />
        <Stack.Screen
          name="LibraryManagement"
          component={LibraryManagementObservationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* custom edit */}

        <Stack.Screen name="Register" component={RegistrationScreen} />
        <Stack.Screen name="Login2" component={LoginScreen2} />

        <Stack.Screen
          name="LibraryReading"
          component={LibraryReadingActivitiesObservationScreen}
        />
        <Stack.Screen
          name="BookCheckout"
          component={MonthlyBookCheckoutScreen}
        />
        <Stack.Screen
          name="OverallSchool"
          component={OverallSchoolObservationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
