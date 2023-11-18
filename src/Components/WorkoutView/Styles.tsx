import { StyleSheet } from "react-native";
import { Height, Width } from "../../Api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        width: Width * 0.9,
        backgroundColor: "#FFF",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    name:{
        fontSize: 25,
        color: "#000",
    },
    days:{
        fontSize: 20,
        color: "#C14600",
    }
})