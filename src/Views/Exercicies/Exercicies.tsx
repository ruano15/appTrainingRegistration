import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { styles } from "./Styles";
import database from "../../Api/APIWorkout";
import Headers from "../../Components/Headers/Headers";
import ExercicieView from "../../Components/ExercicieView/ExercicieView";
import { useNavigation } from "@react-navigation/native"

interface Props{
    navigation: any,
    route: any,
}

export default function Exercicies( props : Props ){
    const route = useRoute()
    const id = route.params

    const navigation = useNavigation()

    const [exercicies, setExercicies] = useState<any[]>([])
    const [refresh, setRefresh] = useState(false)
    const [load,setLoad] = useState(true)

    async function getExercicies() {
        const res = await database.get(`exercicies/search?workoutId=${id}`)
        try{
            setExercicies(res.data)
        }catch(error){
            console.log("erro: " + error)
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {setLoad(!load), getExercicies()})
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Headers name="Exercicies" onPress={() => (props.navigation.navigate("createExercicie", id))}/>
            <FlatList
            data={exercicies}
            renderItem={({item}) => 
            <ExercicieView name={item.exercicieName}
            series={item.series}
            maxReps={item.maxRepetition}
            minReps={item.minRepetition}
            obs={item.observation}
            onPress={() => props.navigation.navigate("updateExercicie", item._id)}
            />}
            keyExtractor={item => item._id}
            refreshing={refresh}
            onRefresh={async () => {
                setRefresh(true)
                getExercicies()
                setRefresh(false)
            }}
            />
        </SafeAreaView>
    )
}