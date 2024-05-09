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
    async function checkAndroidPermissions() {
        let deviceVersion = DeviceInfo.getSystemVersion();
        console.log(
            Number(Platform.Version),
            "device version: " + deviceVersion >= 13,
        );
        let granted = PermissionsAndroid.RESULTS.DENIED;
        console.log("granted permissions: " + granted);
        if (deviceVersion >= "13") {
            granted = PermissionsAndroid.RESULTS.GRANTED;
        } else {
            granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            );
            console.log("granted permissions: " + granted);
        }
    }

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
