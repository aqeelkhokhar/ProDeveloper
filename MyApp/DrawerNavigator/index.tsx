import React, {useState} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import TabsScreen from "../TabsNavigator";
import ProfileScreen from "../ProfileScreen";
import {
    TouchableOpacity,
    View,
    Text,
    SafeAreaView,
    Pressable,
    Switch,
} from "react-native";
import SettingScreen from "../SettingScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import auth from "@react-native-firebase/auth";
import {useTheme} from "../../ThemeContext";
import styles from "./style";

const Drawer = createDrawerNavigator();

function drawerItems(screenData: any) {
    const {navigation, screenHeader, screenName, iconName} = screenData;
    const {theme}: any = useTheme();
    return (
        <>
            <TouchableOpacity
                style={{flexDirection: "row"}}
                onPress={() => navigation.navigate(screenName)}
            >
                <View style={{paddingLeft: 10}}>
                    <Icon
                        name={iconName}
                        size={22}
                        color={theme.colors.iconsColor}
                    />
                </View>
                <Text
                    style={{
                        fontWeight: "400",
                        fontSize: 14,
                        color: theme.colors.text,
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
    const [user, setUser]: any = useState();
    const {theme, toggleTheme, themeName}: any = useTheme();
    const getTrackColor = (isActive: boolean) => ({
        false: theme.colors.disabled,
        true: isActive ? theme.colors.primary : theme.colors.accent,
    });
    auth().onAuthStateChanged(user => setUser(user));
    return (
        <>
            <View
                style={[
                    styles.drawerItemContainer,
                    {backgroundColor: theme.colors.primary},
                ]}
            >
                {drawerItems({
                    navigation: navigation,
                    screenHeader: "My Home",
                    screenName: "Home",
                    iconName: "home",
                })}
            </View>
            <View
                style={[
                    styles.drawerItemContainer,
                    {backgroundColor: theme.colors.primary},
                ]}
            >
                {drawerItems({
                    navigation: navigation,
                    screenHeader: "My Profile",
                    screenName: "Profile",
                    iconName: "user",
                })}
            </View>
            <View
                style={[
                    styles.drawerItemContainer,
                    {backgroundColor: theme.colors.primary},
                ]}
            >
                {drawerItems({
                    navigation: navigation,
                    screenHeader: "My Setting",
                    screenName: "Setting",
                    iconName: "gear",
                })}
            </View>
            <View style={styles.switchContainer}>
                <Text style={{color: theme.colors.text}}>Light Theme</Text>
                <Switch
                    value={themeName === "light"}
                    onValueChange={() => toggleTheme("light")}
                    trackColor={getTrackColor(themeName === "light")}
                    thumbColor={
                        themeName === "light"
                            ? theme.colors.primary
                            : theme.colors.disabled
                    }
                    style={styles.switch}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={{color: theme.colors.text}}>Dark Theme</Text>
                <Switch
                    value={themeName === "dark"}
                    onValueChange={() => toggleTheme("dark")}
                    trackColor={getTrackColor(themeName === "dark")}
                    thumbColor={
                        themeName === "dark"
                            ? theme.colors.primary
                            : theme.colors.disabled
                    }
                    style={styles.switch}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={{color: theme.colors.text}}>Reverse Theme</Text>
                <Switch
                    value={themeName === "reverse"}
                    onValueChange={() => toggleTheme("reverse")}
                    trackColor={getTrackColor(themeName === "reverse")}
                    thumbColor={
                        themeName === "reverse"
                            ? theme.colors.primary
                            : theme.colors.disabled
                    }
                    style={styles.switch}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={{color: theme.colors.text}}>
                    Color Blind Theme
                </Text>
                <Switch
                    value={themeName === "colorBlind"}
                    onValueChange={() => toggleTheme("colorBlind")}
                    trackColor={getTrackColor(themeName === "colorBlind")}
                    thumbColor={
                        themeName === "colorBlind"
                            ? theme.colors.primary
                            : theme.colors.disabled
                    }
                    style={styles.switch}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: 20,
                }}
            >
                <TouchableOpacity
                    onPress={async () =>
                        user
                            ? await auth().signOut()
                            : navigation.navigate("SingIn")
                    }
                >
                    {user ? (
                        <Text
                            style={{fontSize: 15, color: theme.colors.primary}}
                        >
                            Sign Out
                        </Text>
                    ) : (
                        <Text
                            style={{fontSize: 15, color: theme.colors.primary}}
                        >
                            Sign In
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </>
    );
}

const CustomDrawerContent = (props: any) => {
    const {theme}: any = useTheme();
    const {navigation} = props;
    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: 15,
                marginHorizontal: 2,
                backgroundColor: theme.colors.background,
            }}
        >
            {drawerCustomItems(navigation)}
        </SafeAreaView>
    );
};

function DrawerScreen() {
    const { theme }: any = useTheme();
    console.log('theme color', theme.colors.background)
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={({navigation}) => ({
                drawerType: "front",
                drawerStyle: {backgroundColor: theme.colors.background},
                headerStyle: {backgroundColor: theme.colors.background},
                headerLeft: () => (
                    <Pressable
                        style={{marginLeft: 20}}
                        onPress={navigation.toggleDrawer}
                    >
                        <Text>
                            <Icon
                                name="bars"
                                size={22}
                                color={theme.colors.primary}
                            />
                        </Text>
                    </Pressable>
                ),
            })}
        >
            <Drawer.Screen
                name="tabs"
                component={TabsScreen}
                options={{headerShown: true, headerTitle: () => null}}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

export default DrawerScreen;
