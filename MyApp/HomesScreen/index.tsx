import * as React from "react";
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import moment from "moment-timezone";

function HomeScreen({navigation}: any) {
    const convertTimeZone = (date, fromTimeZone, toTimeZone) => {
        const sourceTime = moment.tz(date, fromTimeZone);
        const targetTime = sourceTime.clone().tz(toTimeZone);
        return targetTime.format("YYYY-MM-DD HH:mm:ss");
    };

    // Example usage
    const appointment = "2023-02-20T08:00:00";
    const sourceTimeZone = "Asia/Riyadh";
    const targetTimeZone = moment.tz.guess();

    const TargetTime = convertTimeZone(
        appointment,
        sourceTimeZone,
        targetTimeZone,
    );
    console.log("Time:", TargetTime);

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
