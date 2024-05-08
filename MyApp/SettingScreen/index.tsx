import React from "react";
import {View, Text, SafeAreaView} from "react-native";

function SettingScreen({navigation}: any) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text onPress={() => navigation.navigate("Home")}>
                {" "}
                Setting Screen{" "}
            </Text>
        </SafeAreaView>
    );
}

export default SettingScreen;
