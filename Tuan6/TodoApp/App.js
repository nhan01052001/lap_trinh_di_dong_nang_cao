import React, { useCallback, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Course from "./component/course";

const DATA = [
  {
    id: 1,
    nameToDo: "Hoc Java",
  },
  {
    id: 2,
    nameToDo: "Hoc HTML",
  },
];

export default function App() {
  const [countClick, setCountClick] = useState(2);
  const [id, setId] = useState(DATA.length + 1);
  const [nameToDo, setNameToDo] = useState("");
  const [course, setCourse] = useState([]);

  function alert(item) {
    Alert.alert(item.nameToDo);
  }

  const handleUpLoad = useCallback(async () => {
    setCourse(DATA);
  }, []);

  useEffect(() => {
    handleUpLoad();
  }, []);

  function handleSubmit() {
    setCountClick(countClick + 1);
    setId(DATA.length + countClick);
    setCourse([...course, { id: id, nameToDo: nameToDo }]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.wrapIP}>
        <Text>ToDo App!</Text>
        <TextInput
          style={styles.input}
          value={nameToDo}
          onChangeText={(nameToDo) => setNameToDo(nameToDo)}
          placeholder="Nhập tên việc cần làm"
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.wrapFL}>
        <Text style={styles.titleFL}>Danh Sách Công Việc</Text>
        <FlatList
          data={course}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Course onPress={() => alert(item)} inforCourse={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  wrapIP: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 3,
  },

  wrapFL: {
    flex: 1,
    width: "100%",
    flexGrow: 7,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "grey",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },

  btn: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },

  titleFL: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "700",
  },
});
