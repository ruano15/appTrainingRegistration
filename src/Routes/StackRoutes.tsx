import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Home from "../Views/Home/Home"
import CreateWorkout from "../Views/CreateWorkout/CreateWorkout"
import Exercicies from "../Views/Exercicies/Exercicies"
import CreateExercicie from "../Views/CreateExercicie/CreateExercicie"
import UpdateExercicie from "../Views/UpdateExercicies/UpdateExercicies"
import UpdateWokouts from "../Views/UpdateWorkout/UpdateWorkout"

export default function StackRoutes(){

    const { Navigator, Screen } = createNativeStackNavigator()

    return(
        <NavigationContainer independent={true}>
            <Navigator>
                <Screen name='Home' component={Home} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='createWorkouts' component={CreateWorkout} options={{title: 'Create Workouts'}}/>
                <Screen name='Exercicies' component={Exercicies} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='createExercicie' component={CreateExercicie} options={{title: 'Create Exercicie'}}/>
                <Screen name='updateWorkouts' component={UpdateWokouts} options={{title: 'Update Workout'}}/>
                <Screen name='updateExercicie' component={UpdateExercicie} options={{title: 'Update Exercicie'}}/>
            </Navigator>
        </NavigationContainer>
    )
}