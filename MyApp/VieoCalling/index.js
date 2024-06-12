import { OTPublisher, OTSession, OTSubscriber } from "opentok-react-native";
import React, { useState } from "react";
import { Button, Text, View, Alert, StyleSheet } from "react-native";

function VideoCallingScreen({ route }) {
    const Data = route.params.data;

    const [videoEnabled, setVideoEnabled] = useState(true);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [streamProperties, setStreamProperties] = useState({});

    const onSessionConnected = () => {
        console.log("Session connected");
    };

    const onSessionDisconnected = () => {
        console.log("Session disconnected");
    };

    const onStreamCreated = event => {
        console.log("Stream created", event);
        setStreamProperties(prevState => ({
            ...prevState,
            [event.streamId]: { subscribeToAudio: true, subscribeToVideo: true }
        }));
    };

    const onStreamDestroyed = event => {
        console.log("Stream destroyed", event);
        setStreamProperties(prevState => {
            const updatedState = { ...prevState };
            delete updatedState[event.streamId];
            return updatedState;
        });
    };

    const onError = error => {
        console.error("Error in session", error);
        Alert.alert("Error", "An error occurred: " + error.message);
    };

    const toggleVideo = () => {
        setVideoEnabled(!videoEnabled);
    };

    const toggleAudio = () => {
        setAudioEnabled(!audioEnabled);
    };

    const switchCamera = () => {
        // Method to switch camera (implementation depends on the library's support)
        // Example:
        // publisherRef.current.switchCamera();
    };

    return (
        <View style={ styles.container }>
            <OTSession
                apiKey={ Data.apiKey }
                sessionId={ Data.sessionId }
                token={ Data.token }
                options={ { androidOnTop: 'publisher' } }
                eventHandlers={ {
                    sessionConnected: onSessionConnected,
                    sessionDisconnected: onSessionDisconnected,
                    streamCreated: onStreamCreated,
                    streamDestroyed: onStreamDestroyed,
                    error: onError,
                } }
            >
                <OTSubscriber
                    style={ styles.subscriber }
                    streamProperties={ streamProperties }
                />
                <OTPublisher
                    style={ styles.publisher }
                    properties={ {
                        publishVideo: videoEnabled,
                        publishAudio: audioEnabled,
                    } }
                />
            </OTSession>
            <View style={ styles.controls }>
                <Button title={ videoEnabled ? "Disable Video" : "Enable Video" } onPress={ toggleVideo } />
                <Button title={ audioEnabled ? "Mute" : "Unmute" } onPress={ toggleAudio } />
                <Button title="Switch Camera" onPress={ switchCamera } />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    publisher: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 150,
        height: 150,
        zIndex: 2,
    },
    subscriber: {
        width: '100%',
        height: '100%',
        zIndex: 1,
    },
    controls: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        zIndex: 3,
    },
});

export default VideoCallingScreen;
