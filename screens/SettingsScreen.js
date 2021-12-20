import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export function SettingsScreen({ route, navigation }) {
  const { name } = route.params;
  const { email } = route.params;
  function handleHomePress() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.screen}>
      <Text>Login successfull</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Button title="Go to the Home screen!" onPress={handleHomePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
