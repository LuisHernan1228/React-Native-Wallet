import React, { useState } from 'react';
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import Button from '../components/Button';
import Input from '../components/Input';
import TextStr from '../components/TextStr';

import checkImg from '../assets/images/check.png';
import worldIcon from '../assets/icons/world.png';
import pointIcon from '../assets/icons/point.png';

const Location = ({ navigation }) => {
    const g = require('../globalStyle')
    const [userinfo, setUserinfo] = useState({email: '', password: ''})

    const handleSave = () => {
        navigation.navigate('Signin');
    }

    const handleChange = (field, value) => {
        setUserinfo(info => ({...info, [field]: value}))
    }

    return (
        <SafeAreaView style={[g.pageStyle, styles.container]}>
            <View style={g.bgCardStyle}>
                <View style={[g.flexCol, {alignItems: 'center'}]}>
                    <Image source={checkImg} />
                    <TextStr color="green" size={20} weight="600" strValue="dummyuser10" />
                </View>
                <View style={[g.flexRow, {marginVertical: 20}]}>
                    <View />
                    <TouchableOpacity>
                        <TextStr underline={true} strValue="Change Username" />
                    </TouchableOpacity>
                </View>
                <Input
                    icon={worldIcon}
                    placeholder="Email"
                    value={userinfo.email}
                    onChange={handleChange}
                />
                <Input
                    icon={pointIcon}
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

export default Location;

const styles = StyleSheet.create({
    container: {
        // padding: 30
    },
    changeBtn: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
})
