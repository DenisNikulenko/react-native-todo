import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Поле пустое");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={text => {
          setValue(text);
        }}
        value={value}
        placeholder="Ввод..."
      />
      <AppButton onPress={pressHandler}>
        <Feather
          backgroundColor={THEME.MAIN_COLOR}
          size={20}
          name="plus"
        ></Feather>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  input: {
    padding: 10,
    width: "70%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
    borderRadius: 3
  }
});
