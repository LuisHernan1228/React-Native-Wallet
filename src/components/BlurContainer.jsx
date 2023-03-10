import React from 'react';
import { View, StyleSheet } from 'react-native'
import { BlurView } from '@react-native-community/blur';

const BlurContainer = props => {
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.blurViewStyle}
                blurRadius={1}
                blurType="light"
            >
            </BlurView>
            {props.child}
        </View>
    )
}

export default BlurContainer;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 15,
        borderColor: '#FFFFFF30',
        backgroundColor: '#FFFFFF28',
        paddingHorizontal: 15,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        height: 200
    },
    blurViewStyle: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
})
