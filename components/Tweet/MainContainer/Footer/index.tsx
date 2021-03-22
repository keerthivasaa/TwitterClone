import React from 'react';
import { View, Text } from 'react-native';
import { TweetType } from '../../../../types';
import styles from './styles';

import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons';

export type FooterContainerProps = {
    tweet: TweetType,
}

const FooterContainer = ({tweet}: FooterContainerProps) => (
    <View style={styles.container}>
        <View style={styles.iconContainer}> 
            <Feather name= {'message-circle'} size= {21} color= {'grey'}/>
            <Text style= {styles.number}>{tweet.commentsCount}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name= {'retweet'} size= {30} color= {'grey'}/>
            <Text style= {styles.number}>{tweet.retweetsCount}</Text>
        </View>
        <View style={styles.iconContainer}>
            <AntDesign name= {'hearto'} size= {19} color= {'grey'}/>
            <Text style= {styles.number}>{tweet.likesCount}</Text>
        </View>
        <View style={styles.iconContainer}>
            <EvilIcons name= {'share-google'} size= {28} color= {'grey'}/>
        </View>
    </View>
)

export default FooterContainer;