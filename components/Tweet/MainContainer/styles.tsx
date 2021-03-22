import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    tweetHeaderContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    tweetHeaderName: {
        flexDirection: 'row',
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    username: {
        marginRight: 5,
        color: 'grey',
    },
    createdAt: {
        marginRight: 5,
        color: 'grey',
    },
    moreIcons: {
        alignSelf:'flex-end',
    },
    image: {
        height: 200,
        width: '100%',
        marginVertical: 10,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    },
    content: {
        marginTop: 5,
        lineHeight: 18,
    },
});

export default styles;