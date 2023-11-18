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
    const route = useRoute()
    const id = route.params

    const [inputHeightOBS, setInputHeightOBS] = useState(0)
    const [inputHeightName, setInputHeightName] = useState(0)
    const [name, setName] = useState("")
    const [series, setSeries] = useState("")
    const [max, setMax] = useState("")
    const [min, setMin] = useState("")
    const [obs, setObs] = useState("")

    function create(){
        if(name == "" || series == "" || max == "" || min == ""){
            Alert.alert('Atenção', 'Alguns campos não foram preenchidos!', [
                {text: 'Ok', onPress: () => {}},
            ]);
        }else{
            const req = database.post("exercicies", {exercicieName: name, series: series,
                        maxRepetition: parseInt(max), minRepetition: parseInt(min),
                        observation: obs, workoutId: id})
            try{
                props.navigation.navigate("Exercicies")
            }catch(error){
                console.log(error)
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.containerItens}>
                <Text style={styles.title}>Create Exercicie</Text>
                    <TextInput value={name} onChangeText={setName} style={[styles.inputs, {height: inputHeightName}]} placeholder="Exercicie Name" 
                    multiline={true} onContentSizeChange={obs => setInputHeightName(obs.nativeEvent.contentSize.height)} placeholderTextColor="#616A6B"/>
                <View style={styles.series}>
                    <TextInput placeholderTextColor="#616A6B" value={series} onChangeText={setSeries} style={styles.inputs2} placeholder="Series" keyboardType="number-pad"/>
                <View>
                    <TextInput placeholderTextColor="#616A6B" value={max} onChangeText={setMax} style={styles.inputs2} placeholder="Max Reps" keyboardType="number-pad"/>
                    <TextInput placeholderTextColor="#616A6B" value={min} onChangeText={setMin} style={styles.inputs2} placeholder="Min Reps" keyboardType="number-pad"/>
                </View>
                </View>
                <TextInput placeholderTextColor="#616A6B" value={obs} onChangeText={setObs} style={[styles.inputs, {height: inputHeightOBS}]} placeholder="Observation" multiline={true}
                onContentSizeChange={obs => setInputHeightOBS(obs.nativeEvent.contentSize.height)}/>
                <TouchableOpacity onPress={create} style={styles.button}>
                    <Text style={styles.text}>Create</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}