import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./screens/Main";
import Cau1 from "./screens/Cau1";
import Cau2 from "./screens/Cau2";

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Cau2"
          component={Cau2}
          options={{ title: "Cau 2" }}
        />
        <RootStack.Screen
          name="Cau1"
          component={Cau1}
          options={{ title: "Cau 1" }}
        />
        <RootStack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
