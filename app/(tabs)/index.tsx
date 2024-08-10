import { Image, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Icon Image</Text>
      <Image source={require("@/assets/images/icon.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
