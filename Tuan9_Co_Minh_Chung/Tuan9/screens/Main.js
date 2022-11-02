import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Main = (navigation) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Bai1")}
      >
        <Text>Bai 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Bai 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Bai 3</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  btn: {
    backgroundColor: "red",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});

export default Main;
