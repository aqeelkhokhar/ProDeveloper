import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";

const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("User account created & signed in!");
                navigation.navigate("Home");
            })
            .catch(error => {
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
            <Button title="SingIn" onPress={handleLogin} />
            <View
                style={{flex: 1, justifyContent: "flex-end", marginBottom: 20}}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text style={{fontSize: 20, color: "black"}}>
                        Register Account
                    </Text>
                </TouchableOpacity>
            </View>
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

export default SignInScreen;
