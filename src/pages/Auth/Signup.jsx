import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native'
import Button from '../../components/Button';
import Input from '../../components/Input';
import emailIcon from '../../assets/icons/email.png'
import lockIcon from '../../assets/icons/lock.png'

const Signup = ({ navigation }) => {
    const g = require('../../globalStyle')
    const [userinfo, setUserinfo] = useState({email: '', password: ''})

    const handleSave = () => {
        navigation.navigate('Signin');
    }

    const handleChange = (field, value) => {
        setUserinfo(info => ({...info, [field]: value}))
    }

    return (
        <SafeAreaView style={[g.pageStyle, styles.container]}>
            {/* <Logo /> */}
            <View>
                <Text style={g.textLight}>Signup Page</Text>
            </View>
            <View style={g.bgCardStyle}>
                <Input
                    icon={emailIcon}
                    placeholder="Email"
                    value={userinfo.email}
                    onChange={handleChange}
                />
                <Input
                    icon={lockIcon}
                    placeholder="Password"
                    password={true}
                    value={userinfo.password}
                    onChange={handleChange}
                />
                <Button
                    title="SAVE"
                    onAction={() => handleSave()}
                />
            </View>
        </SafeAreaView>
    )
}

export default Signup;

const styles = StyleSheet.create({
    container: {
        // padding: 30
    }
})
