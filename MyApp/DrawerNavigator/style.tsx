import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    drawerItemContainer: {
        marginTop: 5,
        width: "auto",
        height: "5%",
        borderRadius: 10,
        borderColor: "blue",
        justifyContent: "center",
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
    },
    switch: {
        transform: [{scaleX: 1.2}, {scaleY: 1.2}], 
    },
});

export default styles;
