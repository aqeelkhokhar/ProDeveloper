import * as React from "react";
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import DeviceInfo from "react-native-device-info";

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
