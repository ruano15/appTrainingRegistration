import React, { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native";
import { Alert, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./Styles";
import database from "../../Api/APIWorkout";

interface Props{
    navigation: any,
    route: any,
}

export default function UpdateWokouts( props : Props ){
    const route = useRoute()
    const id = route.params

    const [inputHeightOBS, setInputHeightOBS] = useState(0)
    const [inputHeightName, setInputHeightName] = useState(0)
    const [name, setName] = useState("")
    const [obs, setObs] = useState("")

    async function getWorkout(){
            const res = await database.get(`workouts/${id}`)
            try{
                setName(res.data.workoutName)
                setObs(res.data.workoutDay)
            }catch(error){
                console.log(error)
            }
    }

    function update(){
        if(name == "" || obs == ""){
            Alert.alert('Atenção', 'Alguns campos não foram preenchidos!', [
                {text: 'Ok', onPress: () => {}},
            ]);
        }else{
            const req = database.put(`workouts/${id}`, {workoutName: name, workoutDay: obs})
            try{
                props.navigation.navigate("Home")
            }catch(error){
                console.log(error)
            }
        }
    }
    
    function deleteWorkouts(){
        const req = database.delete(`workouts/${id}`)
        try{
            props.navigation.navigate("Home")
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getWorkout()
    },[])

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.containerItens}>
                <Text style={styles.title}>Create Workout</Text>
                <TextInput placeholderTextColor="#616A6B" value={name} onChangeText={setName} style={[styles.inputs, {height: inputHeightName}]} placeholder="Workout Name" 
                multiline={true} onContentSizeChange={obs => setInputHeightName(obs.nativeEvent.contentSize.height)}/>
                <TextInput placeholderTextColor="#616A6B" value={obs} onChangeText={setObs} style={[styles.inputs, {height: inputHeightOBS}]} placeholder="Workout Days" multiline={true}
                onContentSizeChange={obs => setInputHeightOBS(obs.nativeEvent.contentSize.height)}/>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "95%"}}>
                    <TouchableOpacity onPress={update} style={styles.button}>
                        <Text style={styles.text}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deleteWorkouts} style={[styles.button, {backgroundColor: "#A93226"}]}>
                        <Text style={styles.text}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}