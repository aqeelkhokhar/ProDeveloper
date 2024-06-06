import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in both fields');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://your-api-endpoint.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful login (e.g., navigate to another screen)
                Alert.alert('Success', 'Login successful');
            } else {
                // Handle login failure (e.g., show error message)
                Alert.alert('Error', data.message || 'Login failed');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again.');
        }

        setLoading(false);
    };

    return (
        <ImageBackground
            source={ { uri: 'https://example.com/your-background-image.jpg' } }
            style={ styles.background }
        >
            <View style={ styles.container }>
                <Text style={ styles.title }>Welcome Back</Text>
                <View style={ styles.inputContainer }>
                    <Icon name="email-outline" size={ 24 } color="#666" style={ styles.icon } />
                    <TextInput
                        style={ styles.input }
                        placeholder="Email"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        value={ email }
                        onChangeText={ setEmail }
                    />
                </View>
                <View style={ styles.inputContainer }>
                    <Icon name="lock-outline" size={ 24 } color="#666" style={ styles.icon } />
                    <TextInput
                        style={ styles.input }
                        placeholder="Password"
                        placeholderTextColor="#666"
                        secureTextEntry={ true }
                        value={ password }
                        onChangeText={ setPassword }
                    />
                </View>
                <TouchableOpacity style={ styles.button } onPress={ handleLogin } disabled={ loading }>
                    <Text style={ styles.buttonText }>{ loading ? 'Logging in...' : 'Login' }</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate('Registration') }>
                    <Text style={ styles.registerText }>Don't have an account? Register</Text>
                </TouchableOpacity>
                <Text style={ styles.footerText }>Forgot Password?</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
        color: '#333',
    },
    button: {
        backgroundColor: '#51aff7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerText: {
        color: '#333',
        marginTop: 20,
    },
    footerText: {
        color: '#333',
        marginTop: 20,
    },
});

export default LoginScreen;
