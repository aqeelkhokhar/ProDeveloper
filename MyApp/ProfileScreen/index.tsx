import React from "react";
import { Text, SafeAreaView } from "react-native";

function ProfileScreen({navigation}) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text onPress={() => navigation.navigate("Setting")}>
                {" "}
                Profile Screen{" "}
            </Text>
        </SafeAreaView>
    );
}

export default ProfileScreen;
