import React from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";

//Адаптивный header под Android, Ios. Exp in App.

export const Navbar = ({ title }) => {
  let content = (
    <View
      style={{
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroind,
        }),
        ...styles.navbar,
      }}
    >
      <MaterialIcons name="notes" size={24} color="white" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.navbar}>
      <AppTextBold>{ content }</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    height: 65,
    alignItems: "flex-end",
    backgroundColor: THEME.MAIN_COLOR
  },

  navbarAndroind: {
    backgroundColor: THEME.MAIN_COLOR
  },

  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1
  },

  text: {
    color: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
    fontSize: 28,
    fontWeight: "bold"
  }
});
