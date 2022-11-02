import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import cat from "../assets/cat.png";
import mouse from "../assets/mouse.webp";
import { Dimensions } from "react-native";

const Bai2 = () => {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  let height1 = Math.floor(Math.random() * 280) + 1;
  let width1 = Math.floor(Math.random() * 280) + 1;
  let height2 = Math.floor(Math.random() * 280) + 1;
  let width2 = Math.floor(Math.random() * 280) + 1;
  let height3 = Math.floor(Math.random() * 280) + 1;
  let width3 = Math.floor(Math.random() * 280) + 1;

  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    console.log("====================================");
    console.log(x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    console.log("====================================");
    console.log(y);
    setLocation({
      x: x,
      y: y,
      marginLeft: x - 30,
      marginTop: y - 40,
    });
  }
  function onMove(evt) {
    var x = evt.nativeEvent.locationX;

    var y = evt.nativeEvent.locationY;
    setLocation({ marginLeft: x - 30, marginTop: y - 40 });
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View style={styles.container}>
      <Animated.Image
        source={mouse}
        style={{
          marginLeft: width1,
          marginTop: height1,
          width: 100,
          height: 100,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={{
          marginLeft: width2,
          marginTop: height2,
          width: 100,
          height: 100,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={{
          marginLeft: width3,
          marginTop: height3,
          width: 100,
          height: 100,
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
      ></Animated.Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bai2;
