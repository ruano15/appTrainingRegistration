import { StyleSheet } from "react-native";
import { Height, Width } from "../../Api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        width: Width,
        height: Height * 0.08,
        backgroundColor: "#FFF",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 50,
        flexDirection: "row",
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
    button:{
        width: Width * 0.15,
        height: Height * 0.08,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#117A65",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})