import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {THEME} from "../theme";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState("");
     
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue("")
        } else {
            Alert.alert("Поле пустое")
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input} 
                onChangeText={(text) => {setValue(text)}}
                value={value}
                placeholder="Ввод..."  
            />
            <Button title="добавить" onPress={pressHandler} />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },

    input: {
        padding: 10,
        width: "65%",
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR,
        borderRadius: 3
    }

});