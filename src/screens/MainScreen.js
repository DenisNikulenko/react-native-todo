import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Image, Dimensions } from "react-native";

import { THEME } from "../theme";

import { AddTodo } from "../components/AddTodo";
import { Todo } from "../components/Todo";

//Главный экран. Создание ToDo item`s, список из существующих, удаление, переход в TodoScreen. Exp in App.

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => { // Адаптивная верстка под разное разрешение экрана. 
  const [deviceWidth, setDivaceWidth] = useState(Dimensions.get("window").width - THEME.PADDING_HORISONTAL * 2);

  useEffect(() => { // Запустится 1 раз, во время инициализации компонента.
    const update = () => {
      const width = Dimensions.get("window").width - THEME.PADDING_HORISONTAL * 2; // Получение width и добавление отступов.
      setDivaceWidth(width);
    }
    
    Dimensions.addEventListener("change", update);
    
    return () => {
      Dimensions.removeEventListener("change", update);
    }
  });

  let content = (
    <View style = {{ deviceWidth }}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
        )}  
      />
    </View>
  );

  if (todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require("../../assets/noneTasks.png")}
        />
      </View>
    );
  };

  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      { content }
    </View>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 400
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 100
  }
});
