import { Alert, FlatList, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useState } from "react";

import AddTodo from "./component/addTodo";
import Header from "./component/header";
import TodoItem from "./component/todoitem";

export default function App() {
  const [todo, setTodo] = useState([
    { title: "Buy a coffe", key: "1" },
    { title: "Write assignment for CPIT-280", key: "2" },
    { title: "Create an app", key: "3" },
  ]);

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodo((prevTodo) => {
        return [...prevTodo, { title: text, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("Error", "You must name todo", [{ text: "Understood" }]);
    }
  };

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList data={todo} renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler} />} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: { flex: 1, padding: 50 },
  list: { flex: 1, marginTop: 20 },
});
