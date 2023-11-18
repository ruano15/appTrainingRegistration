import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Styles";
import { Width } from "../../Api/Dimensions";

interface Props {
    name: String,
    series: any,
    maxReps: any,
    minReps: any,
    onPress: any,
    obs: String,
}

export default function ExercicieView( props : Props ){


    return(
        <TouchableOpacity onLongPress={props.onPress} style={styles.container}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", width: Width * 0.85}}>
                <Text style={styles.itens}>Series: {props.series}x</Text>
                <View>
                    <Text style={styles.itens}>Min Reps: {props.minReps}</Text>
                    <Text style={styles.itens}>Max Reps: {props.maxReps}</Text>
                </View>
            </View>
            {props.obs && <Text style={styles.obs}>Observation: {props.obs}</Text>}
        </TouchableOpacity>
    )
}