import * as React from "react";
import {
    SafeAreaView,
    Text,
    View,
} from "react-native";

function HomeScreen({navigation}: any) {


    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text onPress={() => navigation.navigate('Notification')}>
                    Home Screen
                </Text>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
