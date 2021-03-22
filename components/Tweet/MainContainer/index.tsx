import React from 'react';
import { View, Text, Image } from 'react-native';
import { TweetType } from '../../../types';
import { Entypo } from '@expo/vector-icons';

import moment from 'moment';

import styles from './styles';
import FooterContainer from './Footer';

export type MainContainerProps = {
    tweet: TweetType,
}

const MainContainer = ({ tweet }: MainContainerProps) => (
    <View style={styles.container}>
        <View style={styles.tweetHeaderContainer}>
            <View style={styles.tweetHeaderName}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>@{tweet.user.username}</Text>
                <Text style={styles.createdAt}>{moment(tweet.createdAt).fromNow()}</Text>
            </View>
            <View>
                <Entypo style={styles.moreIcons} name={'chevron-down'} size={16} color={'grey'} />
            </View>
        </View>

        <View>
            <Text style={styles.content}>{tweet.content}</Text>
            {!!tweet.image && <Image style= {styles.image} source={{ uri: tweet.image }} />}
        </View>
        <View>
            <FooterContainer tweet= {tweet}/>
        </View>
    </View>
)

export default MainContainer;