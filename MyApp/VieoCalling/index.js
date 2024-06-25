import React, { useState, useEffect } from "react";
import { View, Alert, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { OTSession, OTPublisher, OTSubscriber } from "opentok-react-native";
import { useSelector, useDispatch } from "react-redux";
import { setSessionConnected, clearVideoSession } from "../GlobalStore/slice";
import { selectVideoSession } from "../GlobalStore/selector";

function VideoCallingScreen({ navigation }) {
    const dispatch = useDispatch();
    const videoSession = useSelector(selectVideoSession);
    console.log("VideoCallingScreen", videoSession);

    // State variables for video, audio, and camera
    const [videoEnabled, setVideoEnabled] = useState(true);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [camera, setCamera] = useState("front");

    useEffect(() => {
        dispatch(setSessionConnected(true));

        return () => {
            dispatch(setSessionConnected(false));
            dispatch(clearVideoSession());
        };
    }, [dispatch]);

    const onSessionConnected = () => {
        console.log("Session connected");
        dispatch(setSessionConnected(true));
    };

    const onSessionDisconnected = () => {
        console.log("Session disconnected");
        dispatch(setSessionConnected(false));
    };

    const onError = (error) => {
        console.error("Error in session", error);
        Alert.alert("Error", "An error occurred: " + error.message);
    };

    const toggleVideo = () => {
        setVideoEnabled((prev) => !prev);
    };

    const toggleAudio = () => {
        setAudioEnabled((prev) => !prev);
    };

    if (!videoSession.sessionId || !videoSession.apiKey || !videoSession.token) {
        return (
            <View style={ styles.container }>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={ styles.container }>
            <OTSession
                apiKey={ videoSession.apiKey }
                sessionId={ videoSession.sessionId }
                token={ videoSession.token }
                options={ { androidOnTop: "publisher" } }
                eventHandlers={ {
                    sessionConnected: onSessionConnected,
                    sessionDisconnected: onSessionDisconnected,
                    error: onError,
                } }
            >
                <OTPublisher
                    style={ styles.publisher }
                    properties={ {
                        publishVideo: videoEnabled,
                        publishAudio: audioEnabled,
                        cameraPosition: camera,
                    } }
                />
                <OTSubscriber
                    style={ styles.subscriber }
                    properties={ {
                        subscribeToVideo: true,
                        subscribeToAudio: true,
                    } }
                />
            </OTSession>
            <View style={ styles.controls }>
                <Icon
                    name={ videoEnabled ? "video" : "video-slash" }
                    size={ 30 }
                    color="#51aff7"
                    onPress={ () => navigation.navigate('PatientHistory') }
                />
                <Icon
                    name={ audioEnabled ? "microphone" : "microphone-slash" }
                    size={ 30 }
                    color="#51aff7"
                    onPress={ toggleAudio }
                />
                <Icon
                    name="camera"
                    size={ 30 }
                    color="#51aff7"
                    onPress={ () => {
                        if (camera === "front") {
                            setCamera("back");
                        } else {
                            setCamera("front");
                        }
                    } }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
    },
    publisher: {
        position: "absolute",
        top: 10,
        right: 10,
        width: 150,
        height: 150,
        zIndex: 2,
    },
    subscriber: {
        width: "100%",
        height: "100%",
        zIndex: 1,
    },
    controls: {
        position: "absolute",
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        zIndex: 3,
    },
});

export default VideoCallingScreen;
