import React, { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen() {
    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSave = () => {
        if (!todoItem) {
            Alert.alert('Error', 'Please enter a todo item');
            return;
        }

        setLoading(true);

        const newTodo = { id: Date.now(), item: todoItem, completed: false }; 

        setTodoList([...todoList, newTodo]);
        setTodoItem('');
        setLoading(false);
    };

    const handleDelete = (id) => {
        const updatedList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedList);
    };

    const handleMarkCompleted = async (id) => {
        setLoading(true);

        try {
            // Simulating API call to mark todo as completed
            // Replace this with your actual API call
            const updatedList = todoList.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });

            setTodoList(updatedList);
        } catch (error) {
            Alert.alert('Error', 'An error occurred. Please try again.');
        }

        setLoading(false);
    };

    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            
            <Text style={styles.todoText}>{item.item}</Text>
            <TouchableOpacity onPress={() => handleMarkCompleted(item.id)} style={styles.todoIcon}>
                <Icon name={item.completed ? 'check-circle' : 'checkbox-blank-circle-outline'} size={24} color={item.completed ? '#51aff7' : '#ccc'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Icon name="trash-can-outline" size={24} color="#f00" />
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Enter Todo Task</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Todo"
                    value={todoItem}
                    onChangeText={setTodoItem}
                />
                <TouchableOpacity style={styles.button} onPress={handleSave} disabled={loading}>
                    <Text style={styles.buttonText}>{loading ? 'Saving...' : 'Save'}</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={todoList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.todoList}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#51aff7',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    todoList: {
        marginTop: 20,
    },
    todoItem: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    todoIcon: {
        marginRight: 10,
    },
    todoText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    navigateText: {
        marginTop: 20,
        color: '#51aff7',
        textAlign: 'center',
    },
});

export default HomeScreen;
