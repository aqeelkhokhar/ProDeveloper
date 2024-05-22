import React from "react";
import {Text, SafeAreaView} from "react-native";
import {useTheme} from "../../ThemeContext";

function ProfileScreen({navigation}: any) {
    const {theme} = useTheme();
    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: theme.colors.background}}
        >
            <Text
                style={{color: theme.colors.text}}
                onPress={() => navigation.navigate("Setting")}
            >
                {" "}
                Profile Screen{" "}
            </Text>
        </SafeAreaView>
    );
}

export default ProfileScreen;
