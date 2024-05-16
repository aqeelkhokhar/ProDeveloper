import React, {useEffect, useState} from "react";
import {SafeAreaView, Text} from "react-native";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

function HomeScreen() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    //for firbase real time database
    // const reference = database().ref('/users');
    // console.log('reference', reference);
    //     database()
    // .ref('/user')
    // .on('value', snapshot => {
    //     console.log('User data: ', snapshot.val());
    // });

    useEffect(() => {
        // setFirestoreData();
        // getFirestoreData();
    }, []);

    function onResult(QuerySnapshot) {
        console.log("Got Users collection result.", QuerySnapshot);
    }

    function onError(error) {
        console.error(error);
    }

    //real time listner
    // firestore().collection("ProDeveloperBackend").onSnapshot(onResult, onError);

    async function setFirestoreData() {
        const res = await firestore()
            .collection("ProDeveloperBackend")
            .doc("user")
            .set({
                name: "Aqeel Ahmad",
                country: "Pakistan",
                province: "Punjab",
            });
        console.log("Updated result: ", res);
    }
    async function getFirestoreData() {
        const usersCollection = await firestore()
            .collection("ProDeveloperBackend")
            .doc("user")
            .onSnapshot(documentSnapshot => {
                console.log("User data: ", documentSnapshot.data());
            });
        console.log("ProDeveloperBackend", usersCollection?._data);
        const managerCollection = await firestore()
            .collection("ProDeveloperBackend")
            .doc("Manager")
            .get();
        console.log("ProDeveloperBackend", managerCollection?._data);
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <Text> Welcome to Pro Developer </Text>
        </SafeAreaView>
    );
}

export default HomeScreen;
