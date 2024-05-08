// App.js
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import OrderScreen from "./screens/OrderScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Swiggy Genie" }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ title: "Place Order" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
