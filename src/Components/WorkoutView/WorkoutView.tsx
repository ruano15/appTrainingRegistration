import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

interface Props {
    name: String,
    days: String,
    onPress: any,
    onLongPress: any
}

export default function WorkoutView( props : Props ){

    return(
        <TouchableOpacity onPress={props.onPress} onLongPress={props.onLongPress} style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.days}>{props.days}</Text>
        </TouchableOpacity>
    )
}