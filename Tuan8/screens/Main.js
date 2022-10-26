import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const Main = (navigation) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Cau1")}
      >
        <Text>Cau 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Cau 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Cau 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Cau 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Text>Cau 5</Text>
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
