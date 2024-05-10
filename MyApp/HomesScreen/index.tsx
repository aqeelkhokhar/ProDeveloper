import * as React from "react";
import {
    SafeAreaView,
    Text,
    View,
} from "react-native";
import database from '@react-native-firebase/database';




function HomeScreen({ navigation }: any) {
    //for firbase real time database 
    const reference = database().ref('/users');
    console.log('reference', reference);
        database()
    .ref('/user')
    .on('value', snapshot => {
        console.log('User data: ', snapshot.val());
    });
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text onPress={() => navigation.navigate("Notification")}>
                    Home Screen
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
