import axios from "axios";
import React, { useState} from "react";
import {Button, SafeAreaView, Text, View} from "react-native";

function HomeScreen({navigation}: any) {
    const [sessionId, setSessionId] = useState(null);

    async function startVideo() {
        try {
            const response = await axios.get(
                `http://192.168.11.101:3000/video/session`,
                {headers: {key: "IBZJC9LNE"}},
            );
            console.log("response", response?.data?.sessionId);
            setSessionId(response?.data?.sessionId);
            if (response?.data?.sessionId) {
                console.log("inside get token");
                const res = await axios.get(
                    `http://192.168.11.101:3000/video/token/${response?.data?.sessionId}`,
                    {headers: {key: "IBZJC9LNE"}},
                );
                console.log("Token generated", res?.data);

                if (res?.data) {
                    navigation.navigate("Video Calling", {
                        data: res?.data,
                    });
                }
            }
        } catch (error) {
            console.log("Error getting session", error);
        }
    }

    async function joinVideo() {
        console.log('session joined', sessionId)
        const response = await axios.get(
            `http://192.168.11.101:3000/video/all_credentials`,
            {headers: {key: "IBZJC9LNE"}},
        );
        if (response.status === 200 && response.data.length > 0) {
            const lastCredential = response.data[response.data.length - 1];
            console.log(response.status, "data received from async joinVideo", lastCredential);
            navigation.navigate("Video Calling", { data: lastCredential });
        } else {
            console.error("No credentials found or invalid response");
        }
    }

    return (
        <SafeAreaView style={{flex: 1, padding: 20}}>
            <View>
                <Text>Home Screen</Text>
                <Text>Session Id: {sessionId}</Text>
                <Button title="Start Video" onPress={startVideo} />
                <Button title="Join Video" onPress={joinVideo} />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
