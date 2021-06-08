import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    letterContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    headerText: {
        fontSize: 35,
        fontWeight: "bold"
    },
    contentText: {
        fontSize: 20,
        marginTop: 20
    },
    authors: {
        fontStyle: "italic",
        fontSize: 15,
        marginTop: 20
    },
    button: {
        alignItems: "center",
        backgroundColor: "goldenrod",
        padding: 15,
        height: 50,
        marginTop: 60,
        borderRadius: 15
    },
    recording: {
        alignItems: "center",
        backgroundColor: "lightblue",
        padding: 15,
        height: 50,
        marginTop: 60,
        borderRadius: 15
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 15
    },
    score: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30
    }
})

export {styles}