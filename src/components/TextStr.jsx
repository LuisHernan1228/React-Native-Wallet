import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native'

const TextStr = props => {
    const { color='dark', size=14, weight="400", underline = false, strValue } = props;

    const textColor = () => {
        switch (color) {
            case 'light':
                return styles.textLight
            case 'dark':
                return styles.textDark
            case 'lightdark':
                return styles.textLightDark
            case 'red':
                return styles.textRed
            case 'green':
                return styles.textGreen
            default:
                return styles.textDark
        }
    }
    return (
        <Text
            style={[
                textColor(),
                {
                    fontSize: size,
                    fontWeight: weight,
                    textDecorationLine: underline ? 'underline' : 'none'
                }
            ]}
        >
            {strValue}
        </Text>
    )
}

export default TextStr;

const styles = StyleSheet.create({
    textLight: {
        color: 'white'
    },
    textDark: {
        color: '#808080'
    },
    textLightDark: {
        color: '#A8ADA8'
    },
    textRed: {
        color: '#FF3131'
    },
    textGreen: {
        color: '#00BF63'
    }
})
