import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadAplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
		{ id: "1", title: "Выучить React Native" },
		{ id: "2", title: "Сходить в магазин" },
		{ id: "3", title: "Что делать с машинкой" }
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadAplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = title => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const removeTodo = (id) => {
    const todo = todos.find(t => t.id === id);

    Alert.alert(
      "Удаление элемена",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "Удалить",
          onPress: () => {
            setTodoId(null);
            setTodos(prev => prev.filter(todo => todo.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  const updateTodo = (id, title) => {
    setTodos(old =>
      old.map(todo => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      })
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={id => {
        setTodoId(id);
      }}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
        onSave={updateTodo}
      />
    );
	}
	


  return (
    <View>
      <StatusBar />
      <Navbar title="ToDo..." />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
	},
});
