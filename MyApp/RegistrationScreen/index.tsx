import React, {useState} from "react";
import {View, TextInput, Button,  Text} from "react-native";
import auth from "@react-native-firebase/auth";
import {useTheme} from "../../ThemeContext";
import styles from "./style";

const RegistrationScreen = ({navigation}: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {theme} = useTheme();

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
        <View
            style={[
                styles.container,
                {backgroundColor: theme.colors.background},
            ]}
        >
            <Text style={[styles.label, {color: theme.colors.text}]}>
                Email
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor={theme.colors.text}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={[styles.label, {color: theme.colors.text}]}>
                Password
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor={theme.colors.text}
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button
                color={theme.colors.primary}
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
};



export default RegistrationScreen;
