import React from 'react';
import {
    View, 
    Text, 
    StyleSheet 
} from "react-native";
import { THEME } from "../theme";

export const Navbar = ({title}) => {
    return(
        <View style={styles.navbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

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
        fontWeight: "bold"
    }
});