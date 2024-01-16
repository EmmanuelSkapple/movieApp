import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import MovieDetails from "../pages/MovieDetails";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: any;
  MovieDetails: any;
};

const StackPublic = createNativeStackNavigator<RootStackParamList>();

export function PublicStack() {
  return (
    <StackPublic.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="MovieDetails"
        options={{ headerShown: false }}
        component={MovieDetails}
      />
    </StackPublic.Navigator>
  );
}
