import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import { useTheme } from "../../ThemeContext";
import styles from "./style";


const SignInScreen = ({navigation}:any) => {
    const [email, setEmail] = useState("");
    const {theme}:any = useTheme();
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
                style={[styles.input]}
                placeholderTextColor={theme.colors.text}
                placeholder="Enter your email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={[styles.label, {color: theme.colors.text}]}>
                Password
            </Text>
            <TextInput
                style={[styles.input, {color: theme.colors.text}]}
                placeholder="Enter your password"
                placeholderTextColor={theme.colors.text}
                secureTextEntry
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <Button
                color={theme.colors.primary}
                title="SingIn"
                onPress={handleLogin}
            />
            <View
                style={{flex: 1, justifyContent: "flex-end", marginBottom: 20}}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate("Registration")}
                >
                    <Text style={{fontSize: 20, color: theme.colors.primary}}>
                        Register Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default SignInScreen;
