import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabsScreen from "../TabsNavigator";
import ProfileScreen from "../ProfileScreen";
import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    Pressable,
} from "react-native";
import SettingScreen from "../SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Drawer = createDrawerNavigator();

function drawerItems(screenData: any) {
    const {navigation, screenHeader, screenName, iconName} = screenData;
    return (
        <>
            <TouchableOpacity
                style={{flexDirection: "row"}}
                onPress={() => navigation.navigate(screenName)}
            >
                <View style={{paddingLeft: 10}}>
                    <Icon name={iconName} size={22} color="#51aff7" />
                </View>
                <Text
                    style={{
                        fontWeight: "400",
                        fontSize: 14,
                        color: "#444444",
                        paddingLeft: 15,
                    }}
                >
                    {screenHeader}
                </Text>
            </TouchableOpacity>
        </>
    );
}

function drawerCustomItems(navigation: any): React.JSX.Element {
    return (
        <>
            <View
                style={{
                    marginTop: 5,
                    width: "auto",
                    height: "5%",
                    backgroundColor: "#c3c3cb",
                    borderRadius: 10,
                    borderColor: "blue",
                    justifyContent: "center",
                }}
            >
                {drawerItems({
                    navigation: navigation,
                    screenHeader: "My Profile",
                    screenName: "Profile",
                    iconName: "user",
                })}
            </View>
            <View
                style={{
                    marginTop: 5,
                    width: "auto",
                    height: "5%",
                    backgroundColor: "#c3c3cb",
                    borderRadius: 10,
                    borderColor: "blue",
                    justifyContent: "center",
                }}
            >
                {drawerItems({
                    navigation: navigation,
                    screenHeader: "My Setting",
                    screenName: "Setting",
                    iconName: "gear",
                })}
            </View>
        </>
    );
}

const CustomDrawerContent = (props: any) => {
    const {navigation} = props;
    return (
        <SafeAreaView style={{flex: 1, marginTop: 15, marginHorizontal: 2}}>
            {drawerCustomItems(navigation)}
        </SafeAreaView>
    );
};

function DrawerScreen() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={({ navigation }) => ({
                drawerType: "front",
                headerLeft: () => (
                    <Pressable style={{marginLeft:20}} onPress={navigation.toggleDrawer}>
                        <Text>
                            <Icon name="bars" size={22} color="#51aff7" />
                        </Text>
                    </Pressable>
                ),
            })}
        >
            <Drawer.Screen
                name="tabs"
                component={TabsScreen}
                options={{headerShown: true, headerTitle:()=>null}}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen;
