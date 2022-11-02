import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Button, Image } from "react-native";
import icon from "../assets/cat.png";

const Bai1 = () => {
  const [location, setLocation] = useState({
    x: null,
    y: null,
    marginLeft: new Animated.Value(10),
    marginTop: new Animated.Value(10),
  });

  function onPress(evt) {
    console.log("====================================");
    var x = evt.nativeEvent.locationX;
    // var x = Math.floor(Math.random() * 50);
    console.log("====================================");
    console.log("X: " + x);
    console.log("====================================");
    var y = evt.nativeEvent.locationY;
    // var y = Math.floor(Math.random() * 50);
    console.log("====================================");
    console.log("Y: " + y);
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
    });
  }
  function onMove(evt) {
    console.log("====================================");
    console.log(location);
    console.log("====================================");
    // setLocation({ marginLeft: x, marginTop: y });
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}
    >
      <Text>Show something!</Text>

      <Animated.Image
        source={icon}
        style={{
          marginLeft: marginLeft,
          marginTop: marginTop,
          width: 100,
          height: 100,
        }}
      ></Animated.Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Bai1;
