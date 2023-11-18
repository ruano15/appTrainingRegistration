import React from "react";
import { SafeAreaView, Text } from "react-native";
import StackRoutes from "./src/Routes/StackRoutes";

export default function App(){

  return(
    <SafeAreaView style={{flex: 1}}>
      <StackRoutes/>
    </SafeAreaView>
  )
}