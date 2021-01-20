import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [modal, setModal] = useState(false);

  const saveHandler = title => {
	onSave(todo.id, title);
	setModal(false)
  }

  return (
    <View>
      <EditModal value={todo.title} visible={modal} onCancel={() => setModal(false)} onSave={saveHandler} />
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>
      <View style={styles.btns}>
        <View style={styles.btn}>
          <Button title="back" onPress={goBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.btn}>
          <Button
            title="delete"
            color={THEME.DANGER_COLOR}
            onPress={() => onRemove(todo.id)}
          />
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
    width: "40%",
  },

  title: {
    fontSize: 22,
  },

  card: {
    marginBottom: 20,
    padding: 15,
  },
});
