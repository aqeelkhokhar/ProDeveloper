import React from "react";
import { Text, SafeAreaView} from "react-native";
function SettingScreen({navigation}) {
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
