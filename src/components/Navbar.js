import React from "react";
import { View, StyleSheet } from "react-native";

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navbar}>
      <AppTextBold style={styles.text}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
  },

  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
