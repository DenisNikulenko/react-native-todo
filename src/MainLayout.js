import React, { useState, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { THEME } from "./theme";
import { TodoContext } from "./context/todo/todoContext";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { logo, todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  let content = (
    <MainScreen />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);

    content = (
      <TodoScreen
        onRemove={removeTodo}
        todo={selectedTodo}
        goBack={() => changeScreen(null)}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <StatusBar />
      <Navbar logo={logo} />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORISONTAL,
    paddingVertical: THEME.PADDING_VERTICAL,
  },
});

// const [todoId, setTodoId] = useState(null);
// const [todos, setTodos] = useState([]);

// const addTodo = title => {
//   const newTodo = {
//     id: Date.now().toString(),
//     title,
//   };
//   setTodos(prev => [...prev, newTodo]);
// };

// const removeTodo = id => {
//   const todo = todos.find((t) => t.id === id);

//   Alert.alert(
//     "Удаление элемена",
//     `Вы уверены, что хотите удалить "${todo.title}"?`,
//     [
//       {
//         text: "Отмена",
//         style: "cancel",
//       },
//       {
//         text: "Удалить",
//         onPress: () => {
//           setTodoId(null);
//           setTodos((prev) => prev.filter((todo) => todo.id !== id));
//         },
//       },
//     ],
//     { cancelable: false }
//   );
// };

// const updateTodo = (id, title) => {
//   setTodos(old =>
//     old.map(todo => {
//       if (todo.id === id) {
//         todo.title = title;
//       }
//       return todo;
//     })
//   );
// };
