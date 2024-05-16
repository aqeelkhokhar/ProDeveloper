import React, {useState} from "react";
import {View, TextInput, Button, Alert, StyleSheet, Text} from "react-native";
import auth from "@react-native-firebase/auth";

const RegistrationScreen = ({navigation}: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = () => {
        console.log("inside register screen");
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log("User account created & signed in!");
                navigation.navigate("Home");
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    console.log("That email address is already in use!");
                }

                if (error.code === "auth/invalid-email") {
                    console.log("That email address is invalid!");
                }

                console.error(error);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default RegistrationScreen;
