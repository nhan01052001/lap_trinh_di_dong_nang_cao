import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Bai1 from "./screens/Bai1";
import Main from "./screens/Main";
import Bai2 from "./screens/Bai2";
import Bai3 from "./screens/Bai3";

const RootStack = createStackNavigator();

export default function App() {
  return (
    // thay đổi Bai1 thành Bai2 để chạy bài bài 2
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Bai1"
          component={Bai1}
          options={{ title: "Bai 1" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
