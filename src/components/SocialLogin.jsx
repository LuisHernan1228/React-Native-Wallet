import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'

import facebookIcon from '../assets/icons/facebook.png';
import googleIcon from '../assets/icons/google.png';
import twitterIcon from '../assets/icons/twitter.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import menuIcon from '../assets/icons/main_menu.png';
import RoundButton from './RoundButton';

const SocialLogin = props => {
    const { visible = false, onAction } = props
    const g = require('../globalStyle');
    const option = [
        { name: 'facebook', icon: facebookIcon },
        { name: 'google', icon: googleIcon },
        { name: 'twitter', icon: twitterIcon },
        { name: 'linkedin', icon: linkedinIcon },
        { name: 'menu', icon: menuIcon },
    ]

    return (
        <View style={[g.flexCol, styles.container]}>
            <View style={[g.flexRow, styles.header]}>
                <View style={styles.line} />
                <Text style={[g.textDark, {fontSize: 16}]}>Or Login with</Text>
                <View style={styles.line} />
            </View>
            <View style={g.flexRow}>
                { option.map((item, index) => (
                    <RoundButton
                        key={index}
                        icon={item.icon}
                        onAction={() => onAction(item.name)}
                    />
                ))}
            </View>
        </View>
    )
}

export default SocialLogin;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 30
    },
    header: {
        width: '100%',
        marginBottom: 20
    },
    line: {
        height: 2,
        width: '30%',
        backgroundColor: '#FFFFFF53'
        // width: 100,
        // backgroundColor: 'white'
    }
})
