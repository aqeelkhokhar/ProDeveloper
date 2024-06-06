import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('https://your-api-endpoint.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Registration successful');
                navigation.navigate('Login');
            } else {
                Alert.alert('Error', data.message || 'Registration failed');
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
                <Text style={ styles.title }>Register</Text>
                <View style={ styles.inputContainer }>
                    <Icon name="account-outline" size={ 24 } color="#666" style={ styles.icon } />
                    <TextInput
                        style={ styles.input }
                        placeholder="First Name"
                        placeholderTextColor="#666"
                        value={ firstName }
                        onChangeText={ setFirstName }
                    />
                </View>
                <View style={ styles.inputContainer }>
                    <Icon name="account-outline" size={ 24 } color="#666" style={ styles.icon } />
                    <TextInput
                        style={ styles.input }
                        placeholder="Last Name"
                        placeholderTextColor="#666"
                        value={ lastName }
                        onChangeText={ setLastName }
                    />
                </View>
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
                <View style={ styles.inputContainer }>
                    <Icon name="lock-outline" size={ 24 } color="#666" style={ styles.icon } />
                    <TextInput
                        style={ styles.input }
                        placeholder="Confirm Password"
                        placeholderTextColor="#666"
                        secureTextEntry={ true }
                        value={ confirmPassword }
                        onChangeText={ setConfirmPassword }
                    />
                </View>
                <TouchableOpacity style={ styles.button } onPress={ handleRegister } disabled={ loading }>
                    <Text style={ styles.buttonText }>{ loading ? 'Registering...' : 'Register Account' }</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () => navigation.navigate('Login') }>
                    <Text style={ styles.loginText }>Already have an account? Login</Text>
                </TouchableOpacity>
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
    loginText: {
        color: '#333',
        marginTop: 20,
    },
});

export default RegistrationScreen;
