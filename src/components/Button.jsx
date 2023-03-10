import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Button = (props) => {
    const { title, onAction } = props

    return (
        <TouchableOpacity style={styles.container} onPress={() => onAction()}>
            <LinearGradient
                colors={['#FF3131', '#380000']}
                style={styles.linearGradient}
            >
                <Text style={styles.textLight}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        borderRadius: 12
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 12
    },
    textLight: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
        letterSpacing: 5
    }
})
