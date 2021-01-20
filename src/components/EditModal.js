import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Alert,
} from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";

import { AppButton } from "./ui/AppButton";
import { THEME } from "../theme";

export const EditModal = ({ value, visible, onCancel, onSave }) => {
  const [title, setTitle] = useState(value);
  const saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Ошибка!",
        `Минимальная длина названия 3 симвлла. Сейчас ${
          title.trim().length
        } символов`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
          placeholder={value}
          maxLength={64}
        />
        <View style={styles.buttons}>
          {/* <Button
            title="Cancel"
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          /> */}
          <AppButton onPress={onCancel} backgroundColor={THEME.DANGER_COLOR}>
            <Ionicons name="arrow-back" size={22} color="white" />
          </AppButton>
          <AppButton  onPress={saveHandler}>
            <Fontisto name="save" size={24} color="white" />
          </AppButton>

          {/* <Button title="Save" onPress={saveHandler} /> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: "80%",
  },

  buttons: {
    width: "80%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
