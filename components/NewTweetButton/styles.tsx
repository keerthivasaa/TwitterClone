import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        height: 60,
        width: 60,
        bottom: 50,
        right: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;