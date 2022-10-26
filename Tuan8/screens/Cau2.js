import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

const Cau2 = () => {
  const state = {
    moveAnimation: new Animated.Value(0),
  };

  const _move = () => {
    Animated.timing(state.moveAnimation, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  };

  const _stop = () => {
    Animated.timing(state.moveAnimation, {
      toValue: state.moveAnimation,
      useNativeDriver: false,
    }).start();
  };

  const reset = () => {
    Animated.timing(state.moveAnimation, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          marginLeft: state.moveAnimation,
        }}
      >
        <Image
          source={require("../assets/car.png")}
          resizeMode={"contain"}
          style={{ width: 100, height: 100 }}
        />
      </Animated.View>
      <TouchableOpacity onPress={_move}>
        <Text>Run</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_stop}>
        <Text>stop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reset}>
        <Text>reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "red",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});

export default Cau2;
