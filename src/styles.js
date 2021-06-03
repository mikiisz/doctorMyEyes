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
        width: 0,
        height: 0
    },
    headerText: {
        fontFamily: "Cochin",
        fontSize: 35,
        fontWeight: "bold"
    },
    contentText: {
        fontFamily: "Cochin",
        fontSize: 20,
        marginTop: 20
    },
    authors: {
        fontStyle: "Italic",
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