import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

interface Props {
    name: String,
    onPress: any
}

export default function Headers( props : Props ){

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.name}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}