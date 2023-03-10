import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

const RoundButton = props => {
    const { icon, onAction } = props
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onAction()}
        >
            <Image source={icon} />
        </TouchableOpacity>
    )
}

export default RoundButton;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#FFFFFF30',
        backgroundColor: '#FFFFFF28',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 51,
        height: 51,
        borderRadius: 25,
        margin: 5
    }
})
