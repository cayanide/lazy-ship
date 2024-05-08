// screens/HomeScreen.js
import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Swiggy Genie!</Text>
      <Button
        title="Place Order"
        onPress={() => navigation.navigate("Order")}
      />
    </View>
  );
};

export default HomeScreen;
