import React, {useEffect} from "react";
import {
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    Text,
    View,
} from "react-native";
import DeviceInfo from "react-native-device-info";
import {useDispatch, useSelector, useStore} from "react-redux";
import {globalSelector} from "../GlobalStore/selector";
import globalReducer, {video} from "../GlobalStore/slice";
import {injectReducer} from "redux-injectors";

function HomeScreen({navigation}: any) {
    const dispatch = useDispatch();
    injectReducer("global", globalReducer);
    dispatch(video(34)); // test value set
    const count = useSelector(globalSelector); // get setting value for testing purposes

    console.log(count);

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
