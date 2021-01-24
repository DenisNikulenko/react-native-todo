import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { AppCard } from "../components/ui/AppCard";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { THEME } from "../theme";

import { EditModal } from "../components/EditModal";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = (title) => {
    onSave(todo.id, title);
    setModal(false);
  };

  return (
    <View>
      <EditModal
        value={todo.title}
        visible={modal}
        onCancel={() => setModal(false)}
        onSave={saveHandler}
      />
      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton onPress={() => setModal(true)}><Feather name="edit-3" size={20} color="white" /></AppButton>
      </AppCard>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <AppButton onPress={goBack} backgroundColor={THEME.MAIN_COLOR}>
            <Ionicons name="arrow-back" size={22} color="white" />
          </AppButton>
        </View>
        <View style={styles.btn}>
          <AppButton
            backgroundColor={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          >
            <AntDesign name="delete" size={24} color="white" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  btn: {
    width: "25%"
  },

  title: {
    fontSize: 22
  },

  card: {
    marginBottom: 20,
    padding: 15
  }
});
