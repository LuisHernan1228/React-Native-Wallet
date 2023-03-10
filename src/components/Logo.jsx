import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native'
import logoImg from '../assets/images/logo.png';

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImg} />
        </View>
    )
}

export default Logo;

const styles = StyleSheet.create({
    container: {

    }
})
