import React, { useState } from "react"
import { useRoute } from "@react-navigation/native";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./Styles";
import database from "../../Api/APIWorkout";

interface Props{
    navigation: any,
    route: any,
}

export default function CreateExercicie( props : Props ){

    const [inputHeightOBS, setInputHeightOBS] = useState(0)
    const [inputHeightName, setInputHeightName] = useState(0)
    const [name, setName] = useState("")
    const [obs, setObs] = useState("")

    function create(){
        if(name == "" || obs == ""){
            Alert.alert('Atenção', 'Alguns campos não foram preenchidos!', [
                {text: 'Ok', onPress: () => {}},
            ]);
        }else{
            const req = database.post("workouts", {workoutName: name, workoutDay: obs})
            try{
                props.navigation.navigate("Home")
            }catch(error){
                console.log(error)
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.containerItens}>
                <Text style={styles.title}>Create Workout</Text>
                <TextInput placeholderTextColor="#616A6B" value={name} onChangeText={setName} style={[styles.inputs, {height: inputHeightName}]} placeholder="Workout Name" 
                multiline={true} onContentSizeChange={obs => setInputHeightName(obs.nativeEvent.contentSize.height)}/>
                <TextInput placeholderTextColor="#616A6B" value={obs} onChangeText={setObs} style={[styles.inputs, {height: inputHeightOBS}]} placeholder="Workout Days" multiline={true}
                onContentSizeChange={obs => setInputHeightOBS(obs.nativeEvent.contentSize.height)}/>
                <TouchableOpacity onPress={create} style={styles.button}>
                    <Text style={styles.text}>Create</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}