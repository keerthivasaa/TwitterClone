import * as React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import ProfilePicture from '../components/ProfilePicture';
import { TextInput } from 'react-native-gesture-handler';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { createTweet } from '../src/graphql/mutations';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [image, setImage] = useState("");

    const navigation = useNavigation();

    const onPostTweet = async () => {

        try {
            const currentUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

            const newTweet = {
                userID: currentUser.attributes.sub,
                content: tweet,
                image: image,
            }
            await API.graphql(graphqlOperation(createTweet, { input: newTweet }));
        }
        catch (e) {
            console.log("e");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress= {()=> navigation.goBack()}> 
                    <AntDesign name={'close'} size={30} color={Colors.light.tint} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.tweetButton}>Tweet</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.newTweetContainer}>
                <ProfilePicture image={'https://yt3.ggpht.com/ytc/AAUvwnhcVt7FLQK2YiATIgC8QQMj7vhRy3YYffmJuiLH0g=s900-c-k-c0x00ffffff-no-rj'} />

                <View style={styles.inputContainer}>
                    <TextInput
                        value={tweet}
                        onChangeText={(value) => setTweet(value)}
                        style={styles.tweetInput}
                        multiline={true}
                        numberOfLines={3}
                        placeholder={"What's happening?"} />
                    <TextInput
                        value={image}
                        onChangeText={(value) => setImage(value)}
                        style={styles.imageInput}
                        placeholder={"Image url"} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    tweetButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
    },
    tweetInput: {
        height: 100,
        maxHeight: 300,
        fontSize: 20,
    },
    imageInput: {

    },

});
