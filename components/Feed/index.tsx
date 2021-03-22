import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import tweets from '../../data/tweets';
import Tweet from '../Tweet';

import { API, graphqlOperation } from 'aws-amplify';
import { listTweets } from '../../src/graphql/queries';

const Feed = () => {

    const [tweets, setTweets] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const tweetsData = await API.graphql(graphqlOperation(listTweets));
            setTweets(tweetsData.data.listTweets.items);
        } catch (e) {
            console.log("e");
        } finally {
            setLoading(false);
        }
    }

    useEffect( () => {
        fetchUsers();
    }, [])

    return (
        <View style= {{width: '100%'}}>
            <FlatList 
            data={tweets}
            keyExtractor= {(item) => item.id}
            renderItem= {({item}) => <Tweet tweet={item} />}
            refreshing= {loading}
            onRefresh= {fetchUsers}
            />
        </View>
    )
}

export default Feed;