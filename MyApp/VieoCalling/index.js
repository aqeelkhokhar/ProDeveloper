import React, { useState } from "react";
import { View, Alert, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { OTSession, OTPublisher, OTSubscriber } from "opentok-react-native";

function VideoCallingScreen({ route }) {
    const Data = route.params.data;

    const [videoEnabled, setVideoEnabled] = useState(true);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [camera, setCamera] = useState('front');

    const onSessionConnected = () => {
        console.log("Session connected");
    };

    const onSessionDisconnected = () => {
        console.log("Session disconnected");
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

    return (
        <View style={ styles.container }>
            <OTSession
                apiKey={ Data.apiKey }
                sessionId={ Data.sessionId }
                token={ Data.token }
                options={ { androidOnTop: "publisher" } }
                eventHandlers={ {
                    sessionConnected: onSessionConnected,
                    sessionDisconnected: onSessionDisconnected,
                    error: onError,
                } }
            >
                <OTSubscriber style={ styles.subscriber }
                    properties={ {
                        publishVideo: videoEnabled,
                        publishAudio: audioEnabled,
                        cameraPosition: camera,
                    } } />
                <OTPublisher
                    style={ styles.publisher }
                    properties={ {
                        publishVideo: videoEnabled,
                        publishAudio: audioEnabled,
                        cameraPosition: camera,
                    } }
                />
            </OTSession>
            <View style={ styles.controls }>
                <Icon
                    name={ videoEnabled ? "video" : "video-slash" }
                    size={ 30 }
                    color="#51aff7"
                    onPress={ toggleVideo }
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
                        if (camera === 'front') {
                            setCamera('back');
                        } else {
                            setCamera('front');
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
