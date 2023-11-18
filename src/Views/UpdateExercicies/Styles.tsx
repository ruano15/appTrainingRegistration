import { StyleSheet } from "react-native";
import { Height, Width } from "../../Api/Dimensions";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: "#C6C6C6",
        flex: 1,
        alignItems: "center",
    },
    containerItens:{
        width: Width * 0.95,
        backgroundColor: "#FFF",
        borderRadius: 15,
        alignItems: "center",
        marginVertical: 30
    },
    series:{
        width: Width * 0.9,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    inputs:{
        borderColor: "#000",
        borderWidth: 1,
        color: "#000",
        borderRadius: 10,
        width: "90%",
        textAlign: "center",
        fontSize: Height * 0.04,
        marginVertical: 10,
    },
    inputs2:{
        borderColor: "#000",
        borderWidth: 1,
        color: "#000",
        borderRadius: 10,
        width: Width * 0.40,
        textAlign: "center",
        height: Height * 0.08,
        fontSize: Height * 0.04,
        marginVertical: 10,
    },
    obs:{
        borderColor: "#000",
        borderWidth: 1,
        color: "#000",
        borderRadius: 10,
        width: Width * 0.40,
        textAlign: "center",
        height: Height * 0.08,
        marginVertical: 10,
    },
    title:{
        fontSize: Height * 0.05,
        color: "#000",
    },
    button:{
        width: Width * 0.4,
        height: Height * 0.08,
        borderRadius: Height * 0.04,
        alignItems:"center",
        justifyContent: "center",
        marginBottom: 15,
        marginTop: 10
    },
    text:{
        color: "#FFF",
        fontSize: Height * 0.04
    }
})