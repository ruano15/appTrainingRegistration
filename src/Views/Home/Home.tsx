import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import WorkoutView from "../../Components/WorkoutView/WorkoutView";
import database from "../../Api/APIWorkout";
import { styles } from "./Styles";
import Headers from "../../Components/Headers/Headers";
import { useNavigation } from "@react-navigation/native"

interface Props{
    navigation: any
}
export default function Home( props : Props ){

    const navigation = useNavigation()

    const [workout, setWorkout] = useState<any[]>([])
    const [refresh, setRefresh] = useState(false)
    const [load,setLoad] = useState(true)

    async function getWorkouts() {
        const res = await database.get("workouts")
        try{
            setWorkout(res.data)
        }catch(error){
            console.log("erro: " + error)
        }
    }

    function createWorkout(){
        props.navigation.navigate("createWorkouts")
    }

    useEffect(() => {
        navigation.addListener('focus', () => {setLoad(!load), getWorkouts()})
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            <Headers name="Workouts" onPress={createWorkout}/>
            <FlatList
            data={workout}
            renderItem={({item}) => 
            <WorkoutView name={item.workoutName}
            days={item.workoutDay}
            onPress={() => props.navigation.navigate("Exercicies", item._id)}
            onLongPress={() => props.navigation.navigate("updateWorkouts", item._id)}
            />}
            keyExtractor={item => item._id}
            refreshing={refresh}
            onRefresh={async () => {
                setRefresh(true)
                getWorkouts()
                setRefresh(false)
            }}
            />
        </SafeAreaView>
    )
}