import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import { THEME } from "../../theme";
import { AppTextBold } from "./AppTextBold";

export const AppButton = ({
  children,
  onPress,
  color = "white",
  backgroundColor = THEME.MAIN_COLOR,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: backgroundColor }}>
        <AppTextBold style={{ ...styles.text, color: color }}>
          {children}
        </AppTextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
