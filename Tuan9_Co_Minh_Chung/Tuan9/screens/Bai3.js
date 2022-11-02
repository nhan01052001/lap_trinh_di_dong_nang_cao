import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import cat from "../assets/cat.png";
import mouse from "../assets/mouse.webp";
import { Dimensions } from "react-native";

const Bai3 = () => {
  const [location, setLocation] = useState({
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  let height1 = Math.floor(Math.random() * 700) + 1;
  let width1 = Math.floor(Math.random() * 300) + 1;
  let height2 = Math.floor(Math.random() * 700) + 1;
  let width2 = Math.floor(Math.random() * 300) + 1;
  let height3 = Math.floor(Math.random() * 700) + 1;
  let width3 = Math.floor(Math.random() * 300) + 1;

  const [locationMouse1, setLocationMouse1] = useState({
    marginLeft1: new Animated.Value(width1),
    marginTop1: new Animated.Value(height1),
  });
  const [locationMouse2, setLocationMouse2] = useState({
    marginLeft2: new Animated.Value(width2),
    marginTop2: new Animated.Value(height2),
  });
  const [locationMouse3, setLocationMouse3] = useState({
    marginLeft3: new Animated.Value(width3),
    marginTop3: new Animated.Value(height3),
  });

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
    // onMove(event)
  }
  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = locationMouse1;
  const { marginTop2, marginLeft2 } = locationMouse2;
  const { marginTop3, marginLeft3 } = locationMouse3;
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      // onResponderMove={onMove}
      onResponderRelease={onRelease}
    >
      {/* <Text>Show something!</Text> */}

      <Animated.Image
        source={cat}
        style={[
          {
            marginLeft: marginLeft,
            marginTop: marginTop,
            width: 100,
            height: 100,
          },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        // onResponderMove={onMove}
        onResponderRelease={onPress}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          {
            marginLeft: marginLeft1,
            marginTop: marginTop1,
            width: 100,
            height: 100,
          },
          styles.postion,
        ]}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onPress}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          {
            marginLeft: marginLeft2,
            marginTop: marginTop2,
            width: 100,
            height: 100,
          },
          styles.postion,
        ]}
        // onStartShouldSetResponder={() => true}
        // onMoveShouldSetResponder={() => true}
        // onResponderGrant={onPress}
        // onResponderMove={onMove}
        // onResponderRelease={onPress}
      ></Animated.Image>

      <Animated.Image
        source={mouse}
        style={[
          {
            marginLeft: marginLeft3,
            marginTop: marginTop3,
            width: 100,
            height: 100,
          },
          styles.postion,
        ]}
        // onStartShouldSetResponder={() => true}
        // onMoveShouldSetResponder={() => true}
        // onResponderGrant={onPress}
        // onResponderMove={onMove}
        // onResponderRelease={onPress}
      ></Animated.Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    // left: 0,
    // top: 0,
    // backgroundColor:"red"
  },
  postion: {
    position: "absolute",
    // left:0,
    // right:0,
    backgroundColor: "red",
  },
});

export default Bai3;
