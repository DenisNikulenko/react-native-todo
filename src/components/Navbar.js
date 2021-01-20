import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import { THEME } from "../theme";
import { AppTextBold } from "./ui/AppTextBold";


export const Navbar = ({title}) => {
  let content = (
    <View style={styles.logo}> 
      <MaterialIcons name="notes" size={24} color="white" />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
  return (
    <View style={styles.navbar}>
      <AppTextBold>{content}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "center",
    height: 65,
    alignItems: "flex-end",
    backgroundColor: THEME.MAIN_COLOR,
  },

  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
    }
});
