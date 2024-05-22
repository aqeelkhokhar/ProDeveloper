import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import {useTheme} from "../../ThemeContext";

function SettingScreen({navigation}: any) {
    const {theme} = useTheme();
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: theme.colors.background}}
        >
            <Text
                style={{color: theme.colors.text}}
                onPress={() => navigation.navigate("Home")}
            >
                {" "}
                Setting Screen{" "}
            </Text>
        </SafeAreaView>
    );
}

export default SettingScreen;
