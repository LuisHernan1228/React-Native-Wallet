import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { BlurView } from '@react-native-community/blur';

import Button from '../../components/Button';
import Input from '../../components/Input';
import emailIcon from '../../assets/icons/email.png'
import lockIcon from '../../assets/icons/lock.png'
import BlurContainer from '../../components/BlurContainer';
import SocialLogin from '../../components/SocialLogin';
import TextStr from '../../components/TextStr';

const Signin = ({ navigation }) => {
    const g = require('../../globalStyle')
    const [userinfo, setUserinfo] = useState({email: '', password: ''})
    const optionList = [
        'MINING', 'WALLET', 'EXCHANGE', 'MLM', 'CASH BACK', 'PAYMENT GATEWAY', 'CRYPTO CURRENTCY MARKETPLACE'
    ]

    const handleLogin = () => {
        navigation.navigate('Location')
    }

    const handleChange = (field, value) => {
        setUserinfo(info => ({...info, [field]: value}))
    }

    const handleSocialLogin = (name) => {
        console.warn("handleSocialLogin Action: ", name)
    }

    return (
        <SafeAreaView >
            {/* <Logo /> */}
            <ScrollView style={g.pageStyle}>
                <View style={styles.optionList}>
                    {optionList.map((item, index) => (
                        <View key={index} style={g.flexRow}>
                            <Text style={[g.textLight, g.textBold]}>{item}</Text>
                            {index < optionList.length - 1 &&
                                <Text style={[g.textRed, g.textBold]}> • </Text>
                            }
                        </View>
                    ))}
                </View>
                <View style={[g.bgCardStyle, {position: 'relative'}]}>
                    {/* <BlurView
                        style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0
                        }}
                        blurRadius={23}
                        blurType="light"
                    /> */}
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
                        title="LOGIN"
                        onAction={() => handleLogin()}
                    />
                    <View style={{marginVertical: 30}}>
                        <Text style={[g.textDark, {fontSize: 16, textAlign: 'center', lineHeight: 20}]}>
                            {`Register now and start earning money immediately with Coin7's unique combination of mining and cashback advertising options.\n Alternatively, you can sign in instantly with your preferred social media logins such as Google or Facebook. Simply click on the corresponding button and start today`}
                        </Text>
                    </View>
                </View>
                <SocialLogin onAction={handleSocialLogin} />
                <View style={[g.flexRow, {justifyContent: 'center'}]}>
                    <TextStr strValue="Don't have an account?" />
                    <TouchableOpacity>
                        <TextStr color="red" underline={true} weight="600" strValue="REGISTER NOW" />
                    </TouchableOpacity>
                </View>
                <View style={{height: 50}} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Signin;

const styles = StyleSheet.create({
    optionList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 40
    }
})
