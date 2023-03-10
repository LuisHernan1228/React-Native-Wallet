import React from 'react';
import {
    View,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import eyeIcon from '../assets/icons/eye.png'

const Input = (props) => {
    const g = require('../globalStyle')
    const { name, palceholder, icon, txtStr, onChange, password = false, visible = false } = props;

    return (
        <View style={[g.flexRow,styles.container]}>
            <Image source={icon} />
            <TextInput
                placeholder={palceholder}
                secureTextEntry={password ? true : false}
                value={txtStr}
                onChange={(text) => onChange(name, text)}
                placeholderTextColor='#FFF'
                style={styles.inputStyle}
            />
            { visible &&
                <TouchableOpacity>
                    <Image source={eyeIcon} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: '#FFFFFFA0',
        marginBottom: 20,
        paddingRight: 10
    },
    inputStyle: {
        color: 'white',
        fontSize: 16,
        flex: 1,
        marginLeft: 10
    }
})
