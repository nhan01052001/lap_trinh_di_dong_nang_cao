import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";

const Course = ({ inforCourse }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Text style={{ fontSize: 24, fontWeight: "900" }}>
          {inforCourse.id}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={{ fontSize: 24, fontWeight: "700" }}>
          {inforCourse.nameToDo}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "red",
    marginHorizontal: 5,
    marginBottom: 10,
  },

  left: {
    flex: 1,
    flexGrow: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    margin: 5,
    borderWidth: 1,
    borderColor: "black",
  },

  right: {
    flex: 1,
    flexGrow: 8,
    justifyContent: "center",
    margin: 5,
  },
});

export default Course;
