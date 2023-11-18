import React, { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./Styles";
import database from "../../Api/APIWorkout";

interface Props{
    navigation: any,
    route: any,
}

export default function UpdateExercicie( props : Props ){
    const route = useRoute()
    const id = route.params

    const [inputHeightOBS, setInputHeightOBS] = useState(0)
    const [inputHeightName, setInputHeightName] = useState(0)
    const [name, setName] = useState("")
    const [series, setSeries] = useState("")
    const [max, setMax] = useState("")
    const [min, setMin] = useState("")
    const [obs, setObs] = useState("")

    async function getExercicie(){
            const res = await database.get(`exercicies/${id}`)
            try{
                setName(res.data.exercicieName)
                setSeries(res.data.series.toString())
                setMax(res.data.maxRepetition.toString())
                setMin(res.data.minRepetition.toString())
                setObs(res.data.observation)
            }catch(error){
                console.log("Erro" + error)
            }
    }
    async function updateExercicie(){
        if(name == "" || series == "" || max == "" || min == ""){
            Alert.alert('Atenção', 'Alguns campos não foram preenchidos!', [
                {text: 'Ok', onPress: () => {}},
            ]);
        }else{
        const req = await database.put(`exercicies/${id}`, {exercicieName: name,
            series: series, maxRepetition: max, minRepetition: min, observation: obs})
        try{
            props.navigation.navigate("Exercicies")
        }catch(error){
            console.log("Erro" + error)
        }}
    }

    async function deleteExercicie(){
        const req = await database.delete(`exercicies/${id}`)
        try{
            props.navigation.navigate("Exercicies")
        }catch(error){
            console.log("Erro" + error)
        }
    }

    useEffect(() => {
        getExercicie()
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerItens}>
                    <Text style={styles.title}>Update Exercicie</Text>
                        <TextInput placeholderTextColor="#616A6B" value={name} onChangeText={setName} style={[styles.inputs, {height: inputHeightName}]} placeholder="Exercicie Name" 
                        multiline={true} onContentSizeChange={obs => setInputHeightName(obs.nativeEvent.contentSize.height)}/>
                    <View style={styles.series}>
                        <TextInput placeholderTextColor="#616A6B" value={series} onChangeText={setSeries} style={styles.inputs2} placeholder="Series" keyboardType="number-pad"/>
                    <View>
                        <TextInput placeholderTextColor="#616A6B" value={max} onChangeText={setMax} style={styles.inputs2} placeholder="Max Reps" keyboardType="number-pad"/>
                        <TextInput placeholderTextColor="#616A6B" value={min} onChangeText={setMin} style={styles.inputs2} placeholder="Min Reps" keyboardType="number-pad"/>
                    </View>
                    </View>
                    <TextInput placeholderTextColor="#616A6B" value={obs} onChangeText={setObs} style={[styles.inputs, {height: inputHeightOBS}]} placeholder="Observation" multiline={true}
                    onContentSizeChange={obs => setInputHeightOBS(obs.nativeEvent.contentSize.height)}/>
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: "95%"}}>
                        <TouchableOpacity onPress={updateExercicie} style={[styles.button, {backgroundColor: "#117A65"}]}>
                            <Text style={styles.text}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={deleteExercicie} style={[styles.button, {backgroundColor: "#A93226"}]}>
                            <Text style={styles.text}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}